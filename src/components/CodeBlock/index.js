import { Button } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import useSiteTheme, { ThemeMode } from '../../hooks/useSiteTheme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const CodeBlock = ({ codestring, canCopy, blockTitle }) => {
    const { themeMode } = useSiteTheme();


    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(codestring);
            toast.success("Copied")
        }
        catch (err) {
            toast.error("Failed to copy!")
        }
    };

    return (
        <div className='codeblockParent' style={{ display: 'flex', flexDirection: 'column' }}>
            <ToastContainer toastStyle={{ top: 60 }} autoClose={300} theme={themeMode} />
            {
                canCopy && <div className="buttonContainer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginRight: 10 }}>
                    {
                        blockTitle && <div>{blockTitle} </div>
                    }
                    <Button size='small' variant='outlined' onClick={copyToClipBoard}>Copy</Button>
                </div>
            }

            <SyntaxHighlighter language="javascript" customStyle={{ backgroundColor: themeMode === ThemeMode.DARK ? '#131313' : '#f4f4f4' }} showLineNumbers={true}>
                {codestring}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock