import { useState } from "react";




const MySkills = () => {
    const [skills] = useState([
        {
            id: 1,
            title: 'HTML',
            body: '4 years expirence'
        },
        {
            id: 2,
            title: 'CSS',
            body: '4 years expirence'
        },
        {
            id: 3,
            title: 'JS',
            body: '4 years expirence'
        },
        {
            id: 4,
            title: 'PHP',
            body: '4 years expirence'
        },
        {
            id: 5,
            title: 'React',
            body: '3 years expirence'
        },
        {
            id: 6,
            title: 'Laravel',
            body: '3 years expirence'
        }
    ]);

    return (
        <div className="text-white h-auto">
            <div>
                <ul className="grid grid-cols-1 text-center md:grid-cols-3 gap-10 md:gap-y-20">
                    {
                        skills.map(({id,title,body}) =>(
                            <li key={id}>
                             <p className="text-3xl font-bold mb-3">{title}</p>
                             <p>{body}</p>
                            </li>
                        )
                        )
                    }
                </ul>

            </div>
            </div>
            )
}

            export default MySkills
