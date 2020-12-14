import React from "react"
import { ICategories } from "../../lib/interfaces";

interface IAllCategoriesProps {
    allCategories: ICategories
}

const Categories: React.FC<IAllCategoriesProps> = ({ allCategories }) => {

    return (
        <div className="horizontal-scroll">
            nope
        </div>
    )
};

export default Categories