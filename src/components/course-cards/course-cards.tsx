import React from 'react';

import style from './style.css';

interface CourseCardsProps {
    readonly labels: Array<string>;
}

const courseCard = [
    {
        name: 'React',
        picUrl: '../../assets/images/git.jpg',
        width: 320,
        height: 640,
    },
    {
        name: 'CI/CD',
        picUrl: '../../assets/images/git.jpg',
        width: 320,
        height: 640,
    },
    {
        name: 'JavaScript Mastering',
        picUrl: '../../assets/images/git.jpg',
        width: 320,
        height: 640,
    },
    {
        name: 'git',
        picUrl: '../../assets/images/git.jpg',
        width: 320,
        height: 640,
    },
];

type CourseCardsType = React.FunctionComponent<CourseCardsProps>;

const CourseCards: CourseCardsType = ({ labels }: CourseCardsProps) => {
    let labelsTemplate = labels.map((labelName) => {
        return (
            <li className={style.catalogItem}>
                <a className={style.catalogLink} href="#">
                    <h2 className={style.catalogHeader}>
                        <span className={style.catalogCategory}>
                            {labelName}</span>
                    </h2>
                </a>
            </li>
        );
    });

    return (
        <ol className={style.catalogList}>
            {labelsTemplate}
        </ol>
    );
};

export default CourseCards;