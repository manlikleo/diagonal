import React from 'react';
import MovieLogo from '../Vector.svg'
import Account from '../Vectoraccount.svg';
import Idea from '../Vectoridea.svg'
import KeyIdea from './KeyIdea';

const FirstSection = () => {
    return (
        <div className="bg-ideas lg:p-16 sm:p-8 md:flex-row sm:flex-col flex flex-wrap items-center justify-between h-auto">
            <KeyIdea title="Unbelievable detail at 4K" imgSrc={MovieLogo} subTitle="Amet risus nullam eget felis eget. Faucibus scelerisque eleifend donec pretium vulputate sapien. Justo nec ultrices dui sapien eget mi proin sed libero." />

            <KeyIdea title="Watch with family & friends" imgSrc={Account} subTitle="Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Arcu dui vivamus arcu felis. Est velit egestas dui id ornare arcu odio." />

            <KeyIdea title="Intelligently personalized" imgSrc={Idea} subTitle="Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Libero id faucibus nisl tincidunt. Dui faucibus in ornare quam." />
        </div>
    );
}

export default FirstSection;
