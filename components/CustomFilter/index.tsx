"use client"

// interfaces
export interface CustomFilterPropsInterface {
    title: string;
}

const CustomFilter = ({title}: CustomFilterPropsInterface) => {
    return (
        <div>
            {title}
        </div>
    );
};

export default CustomFilter;