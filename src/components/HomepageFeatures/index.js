import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import LocalImage from './LocalImage.js';

const FeatureList = [
  {
    title: '科技週刊',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        科技週刊由數位各領域專家組成團隊撰寫，每週更新當週最新科技時事，帶您迅速了解科技新聞重點。
        同時我們還原創發表知識、故事、程式等多種形式的內容，豐富您的閱讀體驗。
      </>
    ),
  },
  {
    title: 'Next.js / React 讀書會',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        全台唯一面向初學者的網頁開發讀書會，歡迎所有對 Next.js / React 乃至於網站後端有興趣的人加入！
        目前讀書會成員數已突破 400 多人，每周舉辦線上讀書會供成員交流。
      </>
    ),
  },
  {
    title: '專題百科',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        專題百科是程式貓科技教育社群的全新項目，致力於提供一個平台供大眾交流創作想法，整合大家的創作並提高價值。
        平台簡單好上手，協助您輕鬆地將創作與他人分享，而不需要花費大量時間處理宣傳工作。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
        <LocalImage alt="描述圖片" width="300" height="200" />
      </div>
    </section>
  );
}
