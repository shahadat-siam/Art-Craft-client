const Team = () => {
  return (
    <div>
      <div className="my-10 mt-3">
        <h4 className="text-red-400 font-serif text-center">Team</h4>
        <h2 className="text-4xl font-semibold text-[#554e9f]">A Legendary Community</h2>
      </div>
      <div className="bg-orange-100 py-7 lg:px-16 px-4 lg:flex  space-x-8">
        <div>
          <img
            className="rounded-full"
            src="https://rstheme.com/products/wordpress/infano/wp-content/uploads/2019/04/2-3.jpg"
            alt=""
          />
          <h2 className="text-xl font-bold font-serif mt-2 text-[#007F73]">Kaif Ahmed</h2>
          <p>Painting teacher</p>
        </div>

        <div className="my-8 lg:my-0">
          <img
            className="rounded-full"
            src="https://rstheme.com/products/wordpress/infano/wp-content/uploads/2019/04/5-1.jpg"
            alt=""
          />
          <h2 className="text-xl font-bold mt-2 font-serif text-[#007F73]">Abrar Ahmed</h2>
          <p>Drawing teacher</p>
        </div>

        <div>
          <img
            className="rounded-full"
            src="https://rstheme.com/products/wordpress/infano/wp-content/uploads/2019/04/6.jpg"
            alt=""
          />
          <h2 className="text-xl font-bold mt-2 font-serif text-[#007F73]">Mis Ajanta</h2>
          <p>Sketch Class</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
