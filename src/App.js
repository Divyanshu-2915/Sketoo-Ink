
import React from 'react';
import './App.css';
import HeroImg1 from './images/HeroImg1.jpg';
import HeroImg2 from './images/HeroImg2.jpg';
import HeroImg3 from './images/HeroImg3.jpg';
import SecImg1 from './images/SecImg1.jpg';
import FooterImg1 from './images/FooterImg1.jpg';
import FooterImg2 from './images/FooterImg2.jpg';
import FooterImg3 from './images/FooterImg3.jpg';
import FooterImg4 from './images/FooterImg4.jpg';
import FooterImg5 from './images/FooterImg5.jpg';

function App() {
return (
    <>
    <hgroup className='flex flex-col justify-around h-screen'>
    <section className='px-5 h-10'>
    <nav className='grid grid-flow-col justify-between items-center h-full font-glass tracking-wide  font-bold text-lg'>
        <h1>SKETOO INK</h1>
        <h1>BOOK AN APPOINTMENT</h1>
        <h1>MENU</h1>
    </nav>
    </section>
    <section>
    <h1 className='text-center font-anton text-[275px]'>SKETOO INK</h1>
    </section>
    <section className='text-5xl font-nixie text-center'>
    <h4>
        Tattoo Studio For All Bodies <br/> and Skin Tones
    </h4>
    </section>
    </hgroup>
    <figure className='h-max flex flex-col gap-40'>
        <img src={HeroImg1} alt=""  className='h-96 w-96' />
        <img src={HeroImg2} alt="" className='h-96 w-96' />
        <img src={HeroImg3} alt="" className='h-96 w-96' />
    </figure>
    <main className='flex flex-col'>
    <section className='flex flex-col items-center p-10'>
        <h1 className='font-kalniaLight text-center text-4xl m-10'>ABOUT</h1>
        <h4 className='text-5xl text-wrap text-center font-nixie h-64 w-3/4'> Sketoo Ink is an safe. inclusive space where global tattoo styles comes to life. Our talented artists are dedicated to turning your vision into a lasting masterpiece</h4>
        </section>
        <figure className='h-min place-items-center'>
            <img src={SecImg1} alt="" className='w-screen'/>
        </figure>
        <section className='bg-black h-max flex flex-col  text-white'>
            <h1 className='font-kalniaLight text-center text-4xl m-5 underline underline-offset-[20px]'>PROCESS</h1>
            <h4 className='mt-7 text-center font-nixie text-2xl text-pretty w-3/4 place-self-center'>From initial concept to final art work, my process ensures a personal experience and exceptional results for every client</h4>
            <section className='flex flex-col m-6 gap-20 p-10 border-2 border-white'>
            <div className='w-1/2 h-32  bg-white place-self-start text-black p-4 text-left '>
            <h1 className='font-kalniaLight text-2xl'>Consultation</h1>
            <p className='font-nixie text-xl'>We begin with an in-depth discussion about your vision, preferences, and the story you want your tattoo to tell.</p>
            </div>
            <div className='w-1/2 h-32 bg-white place-self-end text-black p-4 text-right'>
            <h1 className='font-kalniaLight text-2xl'>Design Creation</h1>
            <p className='font-nixie text-xl'>Based on our consultation, I craft a custom design that perfectly captures your concept while ensuring aesthetic excellence</p>
            </div>
            <div className='w-1/2 h-32  bg-white place-self-start text-black p-4 text-left'>
            <h1 className='font-kalniaLight text-2xl'>Refinement</h1>
            <p className='font-nixie text-xl'>We review the design together, making any necessary adjustments to ensure it matches your expectations perfectly.</p>
            </div>
            <div className='w-1/2 h-32  bg-white place-self-end text-black p-4 text-right'>
            <h1 className='font-kalniaLight text-2xl'>Tattooing Session</h1>
            <p className='font-nixie text-xl'>Using premium equipment and techniques, I bring the design to life on your skin with precision and care</p>
            </div>
            <div className='w-1/2 h-32  bg-white place-self-start text-black p-4 text-left'>
            <h1 className='font-kalniaLight text-2xl'>Aftercare</h1>
            <p className='font-nixie text-xl'>I provide detailed aftercare instructions and follow-up to ensure optimal healing and long-lasting results.</p>
            </div>
            </section>
            <section>
                <h1 className='font-kalniaLight text-center text-4xl mt-12 underline underline-offset-[20px]'>MEET THE TEAM</h1>
                <div className='flex flex-row justify-between my-20  p-16'>
                <div className='border-2 border-white w-80 h-96 font-nixie tracking-wider'>
                    <h1 className='text-3xl mx-4'>Prashant</h1>
                    <img src="" alt="img1" className='border-2 border-pink-400 w-full' />
                    <p>Instagram</p>
                </div>
                <div className='border-2 border-white w-80 h-96 font-nixie tracking-wider '>
                    <h1 className='text-3xl mx-4'>Prashant</h1>
                    <img src="" alt="img1" className='border-2 border-pink-400 w-full' />
                    <p>Instagram</p>
                </div>
                <div className='border-2 border-white w-80 h-96 font-nixie tracking-wider '>
                    <h1 className='text-3xl mx-4'>Prashant</h1>
                    <img src="" alt="img1" className='border-2 border-pink-400 w-full' />
                    <p>Instagram</p>
                </div>
                </div>
            </section>
        </section>
        <section className='h-screen border-2 border-black'>
            <h1 className='font-kalniaLight text-center text-4xl mt-12 underline underline-offset-[20px]'>CLIENT TESTIMONY</h1>
        </section>
        <section className='h-min flex flex-col gap-16 py-16'>
            <img src={FooterImg1} alt="" className='h-96 w-96'/>
            <img src={FooterImg2} alt="" className='h-96 w-96'/>
            <img src={FooterImg3} alt="" className='h-96 w-96'/>
            <img src={FooterImg4} alt="" className='h-96 w-96'/>
            <img src={FooterImg5} alt="" className='h-96 w-96'/>
        </section>
        <footer>
            <section className='bg-black justify-around flex flex-row text-white p-12'>
                <div className='border-2 border-white size-72 font-anton text-left text-xl'>
                    <h1>CONTACT US</h1>
                </div>
                <div className='border-2 border-white size-72 font-anton text-left text-xl content-between gap-5'>
                    <h1>MON - FRI.</h1>
                    <h1>9:00 AM 5:00 PM</h1>
                    <h1>SATURDAY</h1>
                    <h1>9:00 AM  2:00 PM</h1>
                </div>
                <div className='border-2 border-white size-72 font-anton text-left text-xl'>
                    <h1>Mini Mall, Pratap talkies road, Bhopal Ganj, Bhilwara, Rajasthan 311001</h1>
                </div>
                <div className='border-2 border-white size-72 font-anton text-left text-xl'>
                
                </div>
            </section>
            <aside>
            <section className='justify-around flex flex-row p-12'>
                <div className='border-2 border-black size-72 font-anton text-left text-xl'>
                    <h1>CONTACT US</h1>
                </div>
                <div className='border-2 border-black size-72 font-anton text-left text-xl content-between gap-5'>
                    <h1>MON - FRI.</h1>
                    <h1>9:00 AM 5:00 PM</h1>
                    <h1>SATURDAY</h1>
                    <h1>9:00 AM  2:00 PM</h1>
                </div>
                <div className='border-2 border-black size-72 font-anton text-left text-xl'>
                    <h1>Mini Mall, Pratap talkies road, Bhopal Ganj, Bhilwara, Rajasthan 311001</h1>
                </div>
                <div className='border-2 border-black size-72 font-anton text-left text-xl'>
                
                </div>
            </section>
            <section>
            <h1 className='text-center font-anton text-[275px]'>SKETOO INK</h1>
            </section>
            </aside>
        </footer>
    </main>
    
    </>
);
}

export default App;

