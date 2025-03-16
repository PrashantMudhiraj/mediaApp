import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
    const [expand, setExpand] = useState(false);
    const handleClick = () => {
        setExpand(!expand);
    };
    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center ">
                <div className="flex flex-row items-center justify-between">
                    {header}
                </div>
                <div onClick={handleClick} className="cursor-pointer pr-2">
                    {expand ? <GoChevronDown /> : <GoChevronLeft />}
                </div>
            </div>
            {expand && <div className="p-2 border-t">{children}</div>}
        </div>
    );
};

export default ExpandablePanel;
