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
    title: '趣味專題',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        趣味專題分享涵蓋範圍從大至小，從工業機器人、國際級競賽，小至學校生科專題、電腦桌面小遊戲。
        我們以最淺顯易懂且趣味的方式呈現出來。
      </>
    ),
  },
  {
    title: '迷因梗圖',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        團隊成員原創迷因梗圖，內容趣味又富有知識內涵，是轉發給親朋好友的優質內容~
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
        <LocalImage alt="描述圖片" width="600" height="400" />
      </div>
    </section>
  );
}
