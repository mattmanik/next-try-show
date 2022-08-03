import Image from 'next/image'
import React, { useEffect } from 'react'
import { useSession, signIn, signOut,getSession } from "next-auth/react"


function Navbar() {

    const { data: session } = useSession();
    console.log(session, 'session ');
    console.log(session?.user?.name, '{session?.user?.name} ');

    useEffect(() => {
        console.log(session, 'session ');

    }, [session])
    

    return (
        <div>
            <div style={{ minHeight: '100px', background: 'black', justifyContent: 'right', display: 'flex' }}>
                {session ? <button onClick={() => signOut()} style={{ fontSize: '20px' }}>
                    Sign Out
                </button> :
                    <button onClick={() => signIn()} style={{ fontSize: '20px' }}>
                        Sign In
                    </button>}
                <div>
                    <Image height={100} width={100} src={session?.user ? session?.user?.image : 'https://cdn.mos.cms.futurecdn.net/PzPq6Pbn5RqgrWunhEx6rg-1200-80.jpg'} alt="profile" />
                </div>
                <div style={{ color: 'white' }}>
                    {session?.user?.name}
                </div>
            </div>
        </div>
    )
}

export default Navbar