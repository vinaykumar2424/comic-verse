import React, { useState, useRef, useEffect } from 'react';
import './GenerationPage.css';
import './ResponsiveGenerate.css';
import Draggable from 'react-draggable';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import comic2 from '../images/comic (2).png'
import 'react-circular-progressbar/dist/styles.css';
const GenerationPage = () => {
    const [inputText, setInputText] = useState('');
    const [generatedImages, setGeneratedImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const imgRefs = useRef([]);
    const [panelSize, setPanelSize] = useState({ width: 0, height: 0 });


    useEffect(() => {
        const panel = document.querySelector(".panel");
        if (panel) {
            setPanelSize({
                width: panel.offsetWidth,
                height: panel.getBoundingClientRect().height,
            });
        }
    }, [generatedImages]);

    async function query(data) {
        console.log(data);
        const response = await fetch(
            "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
            {
                headers: {
                    "Accept": "image/png",
                    "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        if (response.status === 401) {
            alert("Unauthorized. Please check your authorization.");
            return;
        }
        const result = await response.blob();
        const ImageURL = URL.createObjectURL(result);
        console.log(result, ImageURL);
        return ImageURL;
    }

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }
    // SAPARATING THE CONTENT BY "&" AND THEN USE THOSE CONTENT TO MAKE IMAGES
    const generateComic = async () => {
        setIsLoading(true);
        try {
            if (inputText) {
                // const response = await query({ "inputs": inputText });
                // console.log(response);
                // setGeneratedImage(response);
                // setIsLoading(false);
                const inputQueries = inputText.split('&').map((query) => query.trim());
                const images = await Promise.all(inputQueries.map(async (individualQuery) => await query({ "inputs": individualQuery })));
                setGeneratedImages(images);
                setIsLoading(false);
                
            }
        } catch (error) {
            console.error("Error generating image:", error);
            setIsLoading(false);
        }
        setInputText('')
    }

    //FOR LOADER

    const handleImageLoad = () => {
        setIsLoading(false);
    }
    console.log(panelSize.width, panelSize.height)

    //FOR DOWNLOAD BUTTON
    const downloadComic = async () => {
        const articleElement = document.querySelector('.comic');
        if (articleElement) {
            try {
                const blob = await domtoimage.toBlob(articleElement);
                saveAs(blob, 'comic.png');
            } catch (error) {
                console.error('Error converting to image:', error);
            }
        }
    };
    const handleEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            generateComic();
        }
    }

    return (
        <div className="generationPage">
            <div className='bulb'>
                <span className="material-symbols-outlined">
                    lightbulb
                </span>
                <div className='info'>
                    <div>Point 1: Please saparate the input values by '&'</div>
                    <div>Point 2: IN result image, There will a thought box at the bottom of the image of black color, You can drag or edit it to anywhere.</div>
                    {window.innerWidth < 765 && <div className='point3'>Point 3: Click on top right on speechBox to change the content</div>}
                </div>
            </div>
            <section className='topPart'>
                <span className='inputSection'>
                    <div className='heading2'>Write down relevant text to generate your Comic</div>
                    <div className='heading2'>⭐ Note: Please write the n queries and saprate them using '&' to genarate n-panel comic</div>
                    <textarea
                        type='text'
                        placeholder='Enter text here'
                        value={inputText}
                        onChange={handleInputChange}
                        onKeyPress={handleEnterKeyPress}
                    />
                    <button onClick={generateComic}>Generate</button>
                </span>
                <span className='resultSection'>
                    <div className='imagesSection'>
                        {isLoading ? (
                            <div className='loading'>
                                <p>Loading...</p>
                            </div>
                        ) : (
                            generatedImages.length > 0 ? (
                                <article className="comic">
                                    {generatedImages.map((image, index) => (
                                        <div className="panel" key={index} style={{ display: index > 9 ? 'none' : 'block' }}>
                                            <img src={image} alt={`Panel${index + 1}`} onLoad={handleImageLoad} ref={(el) => imgRefs.current[index] = el} />
                                            {index < 9 && <p className="text top-left">Page{index + 1}</p>}
                                            {index == 9 && <p className="text bottom-right">THE END</p>}
                                            <Draggable bounds={{
                                                left: -panelSize.width / 2,
                                                bottom: -5,
                                                right: panelSize.width / 2,
                                                top: -panelSize.height + 10
                                            }}>
                                                <div
                                                    className="box bubble bubble-bottom-left"
                                                    contentEditable="true"
                                                    style={{ userSelect: "text", WebkitUserSelect: "auto" }}
                                                >
                                                    hello
                                                </div>
                                            </Draggable>
                                        </div>
                                    ))}
                                </article>
                            ) : (
                                <img src={comic2} alt='result-image' />
                            )
                        )}
                    </div>
                    <a href="#" onClick={downloadComic}>
                        <span className="material-symbols-outlined donwloadBtn">
                            download
                        </span>
                    </a>
                </span>
            </section>
        </div>
    );
}

export default GenerationPage;
