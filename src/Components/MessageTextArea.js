import React from "react";
const MessageTextArea = () => {
    const textRef = React.useRef();
    const [value, setValue] = React.useState();
    const onChnage = (event) => {
        setValue(event.target.value);
    };
    React.useEffect(() => {
        if (textRef && textRef.current) {
            textRef.current.style.height = "0px";
            const taHeight = textRef.current.scrollHeight;
            textRef.current.style.height = taHeight + "px";
        }
    }, [value]);
    return (
        <div className="mb-3">
            <div className="container mt-4">
                <div className="form-group">
                    <label className="form-label" htmlFor="message">
                        Message:
                    </label>
                    <textarea className="form-control" ref={textRef} onChange={onChnage} name="message" required>
                        {value}
                    </textarea>
                </div>
            </div>
        </div>
    );
};
export default MessageTextArea;