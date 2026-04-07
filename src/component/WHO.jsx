import React from 'react'
import "../make/WHO.css"
import Man from "../asset/mangagir.jpg"
function WHO() {
    return (
        <div className='who-main'>
            <h1>Who We Are</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem enim labore expedita. Pariatur, cumque id.</p>
            <img src={Man} alt="lojdddd" className='who-img' />
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis placeat culpa incidunt doloremque, facilis laudantium, beatae tempore, eius officia cumque ut itaque dolores quos esse. Porro necessitatibus deleniti assumenda voluptates?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolores explicabo quo fugit iste, nostrum iusto eveniet voluptas odio illum quidem sunt officiis. Tempore natus, explicabo minus temporibus libero sunt, recusandae alias culpa, quis voluptatum eum cumque numquam illum dicta accusamus odio fugit laudantium blanditiis consequuntur nostrum! Aperiam, dolorem quis?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia quis iusto repellendus similique fuga, perferendis consequuntur vitae suscipit dolores?</p></article>
        </div>
    )
}

export default WHO
