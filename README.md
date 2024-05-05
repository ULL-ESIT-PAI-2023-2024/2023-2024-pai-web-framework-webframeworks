[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/xyDu7f_D)
## PAI class Presentation web frameworks
### To be used for works to be exposed in class sessions

This directory is organised as follows:

      .
      ├── bib          # Presentation bibliography and references
      ├── slides       # slides of your presentation (PDF is the preferred format)
      ├── tests        # Source code for tests (if applicable)
      ├── src          # Source code (add subdirectories if necessary) 
      
When you receive the link to this repository, clone it and use it to host all the material for the work to be done: slides, code, etc.

Upload the link to this public repository to the class assignment. This is required for the evaluation of the work.

Post the link to the repository in the PAI forum before the presentation date of the work, so that all students have access to the material in the exposition session.

Remove from the repository those directories that are not necessary for your work.


## Creating a new project
### Creating it with Vite

First, let's install Vite globally on your system using npm:
```
npm install -g create-vite
```

Now, you only need to situate in the directory that you want to create your new project and execute the next command:
```
npm create vite@latest
```
This command will be execute a internal Vite's command, to create from scratch a project with the latest version of Vite. 

The next thing to do is write the name of the project we want, choose the framework we want to work with (as we can see there is also the possibility of creating a vanilla project with javascript or typescript), and the programming language to use (we recommend the SWC option when working with React).

Finally, we will have to execute the commands that Vite shows us on the screen, to first, move to the directory of the newly created project, second, install all the necessary packages to develop the project, and finally start the server locally.

```
cd <name-of-project>
npm install or npm i
npm run dev
```