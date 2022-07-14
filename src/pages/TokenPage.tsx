import React,{useState} from 'react'
import '../styles/App.css'
import '../styles/CreateDao.css'
import '../styles/Dashboard.css'
import '../styles/Modal.css'
import '../styles/Sidebar.css'
import { useNavigate } from 'react-router-dom'
const TokenPage = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState<string>("");
    const [purpose, setPurpose] = useState<string>("");
    const [explain, setExplain] = useState<string>("");
    const [supply, setSupply] = useState<number>();
    const [holder, setHolder] = useState<string>("");
    const [file, setFile] = useState<string>("");
    function handleUpload(event:any) {
        setFile(event.target.files[0]);

        // Add code here to upload file to server
        // ...
    }
    const handleClick = () =>{
        navigate("/golive");
    }
  return (
    <div className={"something"} style={{paddingLeft:480, paddingTop:100,paddingBottom:100}}>
                <div className={"pageTitle"}>
                    Token
                </div>
                <div className={"pageDescription"}>
                    Mint ERC20 tokens to create new communities and distribute ownership. Learn more
                </div>
                <div className={"titleBar"}>
                    <div className={"tokentitleTile"} style={{width:750}}>
                    <div>
                    <div className={"tileItemHeader"}>
                        <div>
                            Name
                        </div>
                        <div className={"rect2"}>
                            <div className={"reqText"}>
                                Required
                            </div>
                        </div>
                    </div>
                    <div className={"tokenpageDescription"}>
                        A Short but descriptive name for your project token. This name will be used in block explorers and token wallets.
                    </div>
                        <input className={"inputField"} type="title" name="title" value={title} style={{height:40, width:340}}
                               autoFocus placeholder="Name your Token Name" onChange={(e)=>{setTitle(e.target.value)}} />
                    </div>
                    {/* second */}
                    <div style={{marginLeft:"20px"}}>
                    <div className={"tileItemHeader"}>
                        <div>
                            Symbol
                        </div>
                        <div className={"rect2"}>
                            <div className={"reqText"}>
                                Required
                            </div>
                        </div>
                    </div>
                        <div className={"tokenpageDescription"}>
                           A one owrd symbol signifying your project token. This symbol will be used in block explorers and token wallets.
                      </div>
                        <input className={"inputField"} type="title" name="title" value={purpose} style={{height:40, width:240}}
                               placeholder="Enter your Token Symbol" onChange={(e)=>{setPurpose(e.target.value)}} />
                    </div>
                    </div>
                    
                </div>
                <div className='pageItemHeader'>
                    Description
                    <div className={"fieldDesc"}>
                        Briefly describe your token for use on Mirror and social sharing.
                    </div>
                </div>
                <textarea className={"textField"} name="longDesc" value={explain} style={{height:150}}
                       placeholder="Explain in detail" onChange={(e)=>{setExplain(e.target.value)}} />
                <div>
                    <div className={"subItemHeader"}>
                        <div>
                            Supply
                        </div>
                        <div className={"rect2"}>
                            <div className={"reqText"}>
                                Required
                            </div>
                        </div>
                    </div>
                    <div className={"fieldDesc"}>
                        Define the initial token supply.
                    </div>
                </div>
                <input className={"inputField"} type="number" name="supply" value={supply} style={{height:50}}
                       autoFocus placeholder="100,000,000" onChange={(e)=>{setSupply(e.target.valueAsNumber)}} />
                <div>
                <div className={"subItemHeader"}>
                        <div>
                            Holder
                        </div>
                        <div className={"rect2"}>
                            <div className={"reqText"}>
                                Required
                            </div>
                        </div>
                    </div>
                    <div className={"fieldDesc"}>
                        Enter the address that controls the token. This should probably be a multi-sig. Make sure to enter the Ethereum address, not the ENS name.
                    </div>
                </div>
                <input className={"inputField"} type="holder" name="holder" value={holder} style={{height:50}}
                       autoFocus placeholder="0x3429…" onChange={(e)=>{setHolder(e.target.value)}} />
                <div className={"pageItemHeader"}>
                    Icon image
                    <div className={"fieldDesc"}>
                        Brand your token by uploading an icon image.
                    </div>
                    <div id="upload-box">
                        <div id="upload-file">
                        <button>
                            <input type="file" style={{opacity:"0",position:"relative",zIndex:2}} onChange={handleUpload}/>
                        </button>
                        </div>
                        {/* <p>Filename: {file.name}</p>
                        <p>File type: {file.type}</p>
                        <p>File size: {file.size} bytes</p>
                        {file && <ImageThumb image={file} />} */}
                    </div>
                </div>
                <div>
                    <button id="nextButtonToken" className={"nextButton"} onClick={handleClick}>
                        NEXT STEP
                    </button>
                </div>
            </div>
  )
}

export default TokenPage