import {Post} from './components/PostCard'
// import {sortPosts} from './dataServices'


export const projects = [{title: "Project Management App", description: "A 'Team todos' built with a crisp and intuitive user interface for easy collaboration." , demo: "https://santiagosalazarpavajeau.github.io/react-projects/#/projects", github: "https://github.com/SantiagoSalazarPavajeau/react-projects", stack: "React Hooks, Redux, Rails" },
{title: "Task-Process Log", description: "A tool to keep track of a company’s jobs and processes. Associates jobs and processes through tasks.", demo: "https://youtu.be/YbptjVShuwA?t=102", github: "https://github.com/SantiagoSalazarPavajeau/TASK-PROCESS-LOG", stack: "Ruby, Sinatra"},
                  {title: "Chords and Beats", description: "A music/game app where chords can be combined and saved into a song with a few clicks." , demo: "https://santiagosalazarpavajeau.github.io/chords_beats_frontend/index.html" , github: "https://github.com/SantiagoSalazarPavajeau/chords_and_beats", stack: "Vanilla Javascript, Rails"},
                  {title: "Young Papas Hobbies" , description: "A community for young fathers to share hobbies." , demo: "http://pure-island-81017.herokuapp.com/", github: "https://github.com/SantiagoSalazarPavajeau/young-papa-cave", stack: "Ruby on Rails"},
                  {title: "Satsang" , description: "An  app that connects people with interest in meditation.", demo: "https://www.loom.com/share/c0a6efd4313c4cc7b270524f4da66149" , github: "https://github.com/Duranzno/satsang-frontend/tree/dev/santiago", stack: "React-Hooks, Typescript, Next.js, Node"}
                  ]



export const postsURL: string = "https://dev.to/api/articles?username=santispavajeau"



export const getPosts = async (postsURL: string) => {
    await fetch(postsURL)
            .then(resp=> resp.json())
            .then((posts) => {return posts})
}

