import React from 'react';

import catFam from '../../assets/catFam.png'

const Home = () => {
    return (
        <>
            <div className="text-center">
                <h4 >
                    Hi I'm Marissa Bako-Listy
                </h4>
                Welcome to My Personal Site! I am a senior software enginner with experience in full stack and front end tech stacks and like to spend my days with my husband, cats and my garden.

                <img src={catFam} alt="cat family" className="mw-100 px-2" />
            </div>
        </>
    );
};

export default Home;