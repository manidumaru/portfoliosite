import { Hero } from "./home/hero"
import { Projects } from "./home/projects"
import { Skills } from "./home/skills"
import { Navigation } from "./home/navigation"
import { Contact } from "./home/contact"

export default function Home () {
    return (
        <div>
            <Navigation />
            <Hero />
            <Projects />
            <Skills />
            <Contact />
        </div>
    )
}