 
const CraftItem = () => {
    return (
        <div>
            <h2 className="text-center font-bold text-4xl">Craft Items </h2>
            <div className=" max-w-96 flex flex-col items-start p-3 shadow-lg">
                <img className="w-72 h-60" src="https://i.etsystatic.com/38936109/r/il/cf7455/5709166612/il_600x600.5709166612_hx29.jpg" alt="" />
                <div>
                    <h2 className="text-3xl font-bold text-[#007F73]">Landscape Painting</h2>
                </div>
            </div>
             
            <img className=" mt-2 w-72 h-60" src="https://i.etsystatic.com/40137072/r/il/90f05f/5665097276/il_600x600.5665097276_eb6j.jpg" alt="" />
            {/* https://i.etsystatic.com/7725312/r/il/49290d/5167560332/il_794xN.5167560332_lcf6.jpg */}
        </div>
    );
};

export default CraftItem;