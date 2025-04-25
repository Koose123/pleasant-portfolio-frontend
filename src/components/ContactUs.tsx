

function ContactUS() {
    return (
        <div className="py-20 px-10 flex flex-col md:flex-row justify-between items-centers gap-5 md:gap-10">
            <div className="w-full md:w-1/2 ">
                <h1 className="text-3xl font-bold cursor-pointer my-5">Contact</h1>
                <p className='py-3 text-gray-300/90 md:w-[70%] text-sm'>I would love to hear your project and how i could help.
                    Please fill in the form and i will get back to you as soon as possible.
                </p>
            </div>
            <form className="w-full md:w-1/2">
                <div className="flex flex-col w-full gap-3 my-3">
                    <label htmlFor="name">Name</label>

                    <input type="text" className="bg-inherit outline-none placeholder:text-gray-200/50 border-b-2" name="name" />
                </div>

                <div className="flex flex-col w-full gap-3 my-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="bg-inherit outline-none placeholder:text-gray-200/50 border-b-2" name="email" />
                </div>

                <div className="flex flex-col w-full gap-3 my-3">
                <label htmlFor="message">Message</label>
                <textarea name="message" className="bg-inherit outline-none placeholder:text-gray-200/50 border-b-2 h-[10rem]" id=""></textarea>
                </div>
                <button className=" mt-3 border-b-emerald-400 border-b-2 text-white  px-3 py-2">
                    Send Message
                </button>
            </form>


        </div>
    )
}

export default ContactUS
