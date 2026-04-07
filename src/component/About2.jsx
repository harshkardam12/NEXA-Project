import React, { useRef, useEffect } from 'react';
import { MapPin } from "lucide-react";
import { gsap } from "gsap";
import "../make/About2.css";
import { Link } from "react-router-dom";

function About2() {

    /* ---------------------------------------------------
       CHROMA GRID CODE (Directly added inside About2)
    --------------------------------------------------- */
    const ChromaGrid = ({
        items,
        className = '',
        radius = 300,
        columns = 3,
        rows = 2,
        damping = 0.45,
        fadeOut = 0.6,
        ease = 'power3.out'
    }) => {
        const rootRef = useRef(null);
        const fadeRef = useRef(null);
        const setX = useRef(null);
        const setY = useRef(null);
        const pos = useRef({ x: 0, y: 0 });

        const demo = [
            {
                image: 'data:image/jpeg;base64,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',
                title: 'Tobirama Senju',
                subtitle: 'Virus',
                handle: '@tobirama',
                borderColor: '#4F46E5',
                gradient: 'linear-gradient(145deg, #4F46E5, #000)',
                url: 'https://github.com/'
            },
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKfCsXpX6om95WvcKV5mRXJAA1D00L589qw&s',
                title: 'Obito Uchiha',
                subtitle: 'Hacker uchiha',
                handle: '@jordanchen',
                borderColor: '#e07c12ff',
                gradient: 'linear-gradient(210deg, #e69a20ff, #000)',
                url: 'https://linkedin.com/in/'
            },
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1kawjC_RSIT27dIFvjSOejn56PZIHheLGg&s',
                title: 'Madara Uchiha',
                subtitle: 'Ghost of the Uchiha',
                handle: '@morganblake',
                borderColor: '#de101bff',
                gradient: 'linear-gradient(165deg, #de2626ff, #000)',
                url: 'https://dribbble.com/'
            },
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTngut0QS4Rf-GuCkUKWnpKFFEv9L2aza2mCQ&s',
                title: 'Casey Park',
                subtitle: 'Data Scientist',
                handle: '@caseypark',
                borderColor: '#EF4444',
                gradient: 'linear-gradient(195deg, #EF4444, #000)',
                url: 'https://kaggle.com/'
            },
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkjOkEACLnt2JIGzArOgTk5xw3kqtnq2zfUA&s',
                title: 'Sam Kim',
                subtitle: 'Mobile Developer',
                handle: '@thesamkim',
                borderColor: '#8B5CF6',
                gradient: 'linear-gradient(225deg, #8B5CF6, #000)',
                url: 'https://github.com/'
            },
            {
                image: 'data:image/jpeg;base64,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',
                title: 'Tyler Rodriguez',
                subtitle: 'Cloud Architect',
                handle: '@tylerrod',
                borderColor: '#06B6D4',
                gradient: 'linear-gradient(135deg, #06B6D4, #000)',
                url: 'https://aws.amazon.com/'
            }
        ];

        const data = items?.length ? items : demo;

        useEffect(() => {
            const el = rootRef.current;
            if (!el) return;
            setX.current = gsap.quickSetter(el, '--x', 'px');
            setY.current = gsap.quickSetter(el, '--y', 'px');
            const { width, height } = el.getBoundingClientRect();
            pos.current = { x: width / 2, y: height / 2 };
            setX.current(pos.current.x);
            setY.current(pos.current.y);
        }, []);

        const moveTo = (x, y) => {
            gsap.to(pos.current, {
                x,
                y,
                duration: damping,
                ease,
                onUpdate: () => {
                    setX.current?.(pos.current.x);
                    setY.current?.(pos.current.y);
                },
                overwrite: true
            });
        };

        const handleMove = e => {
            const r = rootRef.current.getBoundingClientRect();
            moveTo(e.clientX - r.left, e.clientY - r.top);
            gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
        };

        const handleLeave = () => {
            gsap.to(fadeRef.current, {
                opacity: 1,
                duration: fadeOut,
                overwrite: true
            });
        };

        const handleCardClick = url => {
            if (url) {
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        };

        const handleCardMove = e => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        };

        return (
            <div
                ref={rootRef}
                className={`chroma-grid ${className}`}
                style={{
                    '--r': `${radius}px`,
                    '--cols': columns,
                    '--rows': rows
                }}
                onPointerMove={handleMove}
                onPointerLeave={handleLeave}
            >
                {data.map((c, i) => (
                    <article
                        key={i}
                        className="chroma-card"
                        onMouseMove={handleCardMove}
                        onClick={() => handleCardClick(c.url)}
                        style={{
                            '--card-border': c.borderColor || 'transparent',
                            '--card-gradient': c.gradient,
                            cursor: c.url ? 'pointer' : 'default'
                        }}
                    >
                        <div className="chroma-img-wrapper">
                            <img src={c.image} alt={c.title} loading="lazy" />
                        </div>
                        <footer className="chroma-info">
                            <h3 className="name">{c.title}</h3>
                            {c.handle && <span className="handle">{c.handle}</span>}
                            <p className="role">{c.subtitle}</p>
                            {c.location && <span className="location">{c.location}</span>}
                        </footer>
                    </article>
                ))}
                <div className="chroma-overlay" />
                <div ref={fadeRef} className="chroma-fade" />
            </div>
        );
    };

    /* ---------------------------------------------------
       MAIN ABOUT SECTION JSX
    --------------------------------------------------- */
    return (
        <div className='About2'>

            <h1>ABOUT US</h1>
            <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, minus! dolor sit.</p>

            <div className='who'>
                <header>
                    <h2>
                        <MapPin size={25} color='rgba(11, 137, 254, 1)' style={{ marginRight: "10px" }} />
                        Who we are
                    </h2>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam placeat quas cumque expedita aperiam autem similique, id provident, corporis consequuntur molestias obcaecati natus perspiciatis quis nemo necessitatibus itaque aspernatur deleniti ratione. Ipsa sequi modi ex? Consequuntur explicabo doloribus ratione debitis.
                    </p>
                </header>

                <Link
                    to="/who"
                    className="click"
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                >
                    Know More ➜
                </Link>

            </div>

            {/* MEET OUR TEAM */}
            <div className="team-section">
                <h2 className="team-title">Meet Our Team</h2>
                c
                <div className="team-grid-wrapper">
                    <ChromaGrid rows={2} columns={3} radius={300} />
                </div>
            </div>
            <div className='our'>
                <h3>our Achivement</h3>
                <div className='spn'>
                    <span> 10+ <label>Years of Excellence</label></span>
                    <span>50+<label>Projects Completed</label></span>
                    <span>30K<label>client</label></span>
                </div>
            </div>


        </div>
    );
}

export default About2;
