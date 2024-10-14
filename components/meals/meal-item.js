import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';

import burgerImg from '@/assets/burger.jpg';


export default function MealItem({ title, slug, image, summary, creator , index}) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image
            src={burgerImg}
            alt={title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
