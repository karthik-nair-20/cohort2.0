export default function Assignment1() {

    return (
        <>
            <div className="h-screen w-screen bg-slate-900 flex items-center justify-center">
                <div className="shadow-lg shadow-white w-max" >
                    <div className='h-fit w-fit'>
                        <img
                            src='https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            className='h-1/2 object-cover bg-cyan-200'
                        ></img>
                    </div>
                    <div className='flex flex-col items-center justify-end h-full py-4 bg-white'>
                        <div>
                            <h2 className='font-bold'>
                                Karthik <span className='font-semibold opacity-50 '>23</span>
                            </h2>
                            <p className='opacity-60'>Trivandrum</p>
                        </div>
                    </div>
                    <div className="divide-x"></div>
                    <div className="flex items-center justify-around py-4 bg-white">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className='font-bold'>80K</h2>{' '}
                            <p className='text-sm opacity-50'>Followers</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className='font-bold'>80K</h2>{' '}
                            <p className='text-sm opacity-50'>Followers</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className='font-bold'>80K</h2>{' '}
                            <p className='text-sm opacity-50'>Followers</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}