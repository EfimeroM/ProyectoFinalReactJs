import React from 'react'
import './HomeView.scss'
import { HeaderGameListContainer } from '../HeaderGameListContainer/HeaderGameListContainer'

export const HomeView = () => {
    return (
        <>
            <div className="header-title">
                <p>Bienvenido a TopTier</p>
            </div>
            <div className="text-home">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel laborum veritatis in fugit nisi impedit, molestias reprehenderit. Doloremque, nihil voluptatibus atque totam in molestiae modi libero fuga iste consequatur!</p>
            </div>
            <HeaderGameListContainer categoryId = '1' />
            <div className="text-home">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel laborum veritatis in fugit nisi impedit, molestias reprehenderit. Doloremque, nihil voluptatibus atque totam in molestiae modi libero fuga iste consequatur!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel laborum veritatis in fugit nisi impedit, molestias reprehenderit. Doloremque, nihil voluptatibus atque totam in molestiae modi libero fuga iste consequatur!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel laborum veritatis in fugit nisi impedit, molestias reprehenderit. Doloremque, nihil voluptatibus atque totam in molestiae modi libero fuga iste consequatur!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel laborum veritatis in fugit nisi impedit, molestias reprehenderit. Doloremque, nihil voluptatibus atque totam in molestiae modi libero fuga iste consequatur!
                </p>
            </div>
            <HeaderGameListContainer categoryId = '2' />
            <div className="text-home">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel laborum veritatis in fugit nisi impedit, molestias reprehenderit. Doloremque, nihil voluptatibus atque totam in molestiae modi libero fuga iste consequatur!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel laborum veritatis in fugit nisi impedit, molestias reprehenderit. Doloremque, nihil voluptatibus atque totam in molestiae modi libero fuga iste consequatur!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel laborum veritatis in fugit nisi impedit, molestias reprehenderit. Doloremque, nihil voluptatibus atque totam in molestiae modi libero fuga iste consequatur!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel laborum veritatis in fugit nisi impedit, molestias reprehenderit. Doloremque, nihil voluptatibus atque totam in molestiae modi libero fuga iste consequatur!
                </p>
            </div>
        </>
    )
}

export default HomeView