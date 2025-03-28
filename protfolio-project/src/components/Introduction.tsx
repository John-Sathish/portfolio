function Introduction() {
  return (
    <section id = "home">
      <div className="flex justify-center flex-col items-center ">
        <div className="text-white h-[120px] border-r-[1px] mt-[-20px]" />
        <div className="w-[5px] h-[5px] bg-blue-700 rounded-full"></div>
        <h2
          className="mt-5 text-white font-medium text-[13px]
            tracking-widest"
        >
          HELLO! MY NAME IS
        </h2>
        <h2
          className="text-[70px] font-bold text-white tracking-widest
            mt-5"
        >
          JOHN SATHISH
        </h2>
        {/* <img
          src="/profile.jpg"
          className="w-[160px] h-[160xp] bg-gray-200 p-7 rounded-full"
        /> */}
      </div>
    </section>
  );
}

export default Introduction;
