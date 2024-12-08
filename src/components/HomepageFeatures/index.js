import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Making onscreen content\n' +
            'available to Siri and Apple\n' +
            'Intelligence',
        Svg: require('@site/static/img/design.svg').default,
        description: (
            <>

            </>
        ),
    },
    {
        title: 'Apple Intelligence updates',
        Svg: require('@site/static/img/cloud-hosting.svg').default,
        description: (
            <>

            </>
        ),
    },
    {
        title: 'Making camera actions\n' +
            'available to Siri and Apple\n' +
            'Intelligence',
        Svg: require('@site/static/img/app.svg').default,
        description: (
            <>

            </>
        ),
    },
    {
        title: 'Enhancing your app\n' +
            'experience with the Camera\n' +
            'Control',
        Svg: require('@site/static/img/server.svg').default,
        description: (
            <>

            </>
        ),
    },
    {
        title: 'Introductory visionOS\n' +
            'samples',
        Svg: require('@site/static/img/server.svg').default,
        description: (
            <>

            </>
        ),
    },
    {
        title: 'Implementing object tracking\n' +
            'in your visionOS app' ,
        Svg: require('@site/static/img/server.svg').default,
        description: (
            <>

            </>
        ),
    },
    {
        title: 'Classifying images for\n' +
            'categorization and searchT'  ,
        Svg: require('@site/static/img/server.svg').default,
        description: (
            <>

            </>
        ),
    },
    {
        title: 'Generating high-quality\n' +
            'thumbnails from videos'  ,
        Svg: require('@site/static/img/server.svg').default,
        description: (
            <>

            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
