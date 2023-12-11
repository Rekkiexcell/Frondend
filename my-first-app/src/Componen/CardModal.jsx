export default function CardModal(){
    return(
        <>
        <button className="btn bg-neutral bg-opacity-50 text-white outline-white absolute bottom-10 right-10" onClick={()=>document.getElementById('my_modal_2').showModal()}>Quick View</button>
        <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
        </>
      
    )
}