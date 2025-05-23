import { getMeals } from '@/lib/meals';
import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import { Suspense } from 'react';

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />
}

const MealsPage = () => {




  return (
    <>
      <header className={classes.header}>
        <h1>Delicious mealse ,created {' '}<span className={classes.highlight}>by you</span></h1>
        <p>Choose your favorite recipe and cook .It is easy and fun !</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading Meals...</p>}>
          <Meals />
        </Suspense>

      </main>
    </>
  )
}
export default MealsPage;