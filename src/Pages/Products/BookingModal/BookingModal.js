import React from 'react';

const BookingModal = ({ phone, setPhone }) => {
    const { name, resale } = phone;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const resale = form.resale.value;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;


        const booking = {
            phone: name,
            buyer: name,
            email,
            number,
            resale
        }
        console.log(booking)
        setPhone(null);

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input name='resale' type="text" value={resale} className="input input-bordered w-full" />
                        <input name='name' type="text" placeholder="Name" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input name='number' type="text" placeholder="Number" className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-accent w-full max-w-xs' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;