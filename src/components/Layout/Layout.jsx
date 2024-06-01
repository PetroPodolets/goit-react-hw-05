import { Suspense } from "react";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css"

export default function Layout({ children }) {
    return (
        <div className={css.body}>
            <Navigation />
            <Suspense fallback={<Loader />}>
                {children}
            </Suspense>
        </div>
    );
}