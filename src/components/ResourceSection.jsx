import React, { useState } from 'react';
import TabLinks from './TabLinks';
import Card from './Card';

export default function ResourceSection() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='w-full lg:w-[1160px] pt-[90px] mx-auto'>
            <TabLinks onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
            <Card selectedCategory={selectedCategory} />
        </div>
    );
}