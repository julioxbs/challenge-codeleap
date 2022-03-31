export default function Modal({className, closeModal, acceptRemove}) {
    return(
        <div className={className}>
            <div className="content__modal">
                <p className="title__modal">Are you sure you want to delete this item?</p>

                <div className="button__box btn--modalDelete">
                    <button onClick={() => closeModal(false)} className={'btn__outline'}>
                        Cancelar
                    </button>

                    <button onClick={() => acceptRemove()} className={'btn__outline'}>Ok</button>
                </div>
            </div>
        </div>
    )
}