const AboutIntro = () => {
    return (
        <div className="flex gap-x-8">
            <div className="flex h-fit gap-x-4 flex-1 about-header text-4xl font-bold uppercase">
                <p>About Zain interior</p>
                <div className="grow text-[#FFFAF3] border-b-black border-b">....</div>
            </div>


            <p className="flex-1 about-text text-justify text-lg font-light uppercase">We believe in creating spaces that inspire and enhance individual well-being. Our commitment lies in achieving a balance between beauty, functionality,and sustainability, delivering designs that uniquely reflect each client’s story. With a focus on innovation, quality, and integrity. we aim to transform interiors into meaningful environments that enrich daily life</p>

            {/* <p className="flex-1 about-text text-justify text-lg font-light uppercase">Zain Interior, based in Saudi Arabia, specializes in transforming spaces with innovative designs and exceptional craftsmanship. Having successfully served over 40 satisfied clients, we create elegant, functional, and modern interiors for homes and businesses. Our expert team focuses on delivering personalized solutions, ensuring quality and customer satisfaction in every project, reflecting style and comfort.</p> */}
            
        </div>
    )
}

export default AboutIntro;