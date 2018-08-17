# Contributing 
Code With Us stemmed from a group of aspiring web developers trying to cultivate knowledge through a mutual learning experience; strongly influenced by the model of [CodeBuddies](https://codebuddies.org). A setting where those chosen for Udacity's Grow with Google Scholarship Program could openly convey the concepts they were learning in order to solidify their knowledge and pass it on. 

If you are reading this, chances are you are interested in becoming an active participant, either by contributing content, improving the quality of our material, or both. This repository is the home of training support material, including live coding files from our sessions. Since this group is composed of individuals that are relatively new to web development, this doc is used to outline the steps of contributing in hopes of enabling participants of all levels.

## TL;DR
1. Fork project, then clone that locally.
2. Add this repository as an upstream and sync your local before branching.
3. Do what you have to do.
4. Push changes to your origin.
5. Go to Github and create a push request.
6. Wait for review and/or feedback.

## Fork
The first step is to get a working copy of the repository for yourself.

1. Click *fork* in [this](https://github.com/Code-with-Us/sessions) repository to get your own personal copy in your personal Github repository.
2. Clone your version locally to your machine.
   ```shell
   git clone <your-repo-url>
   ``` 
3. Add [this](https://github.com/Code-with-Us/sessions) repository as an upstream remote to your local repository.
   ```shell
   git remote add upstream https://github.com/Code-with-Us/sessions.git
   ```
You should now have two remotes for this project:
1. origin - points to your Github fork (read/write).
2. upstream - Code with Us session project repository (read-only).

## Add/Amend Content
So now you have your own version, a concept you can cover with some code, or notice an error on previous sessions material. What's next? 
1. First, make sure you have the latest and greatest on your versions. 

    ```sh
    git checkout master
    git pull upstream master && git push origin master
    ```

2. Create and checkout a branch so you can freely add or edit files.

    ```shell
    git checkout -b <branch-name>
    ```
    > For your branch name, use something that describes the topic. If there will be a before and after session version, annotate that in the branch names.

3. For training session materials, create an independent directory and have fun with it.

## Push Request
1. To start the process of a making a push request you need to push the changes to the origin remote.

    ```shell
    git push -u origin <branch-name>
    ```
    > The use of the `-u` flag creates and links this branch with the remote one.

2. Then head to your fork of this repository where you should see a `Compare and pull request` button. Click it.
3. Fill the required fields like the title and description of the purpose of the pull request.
4. It should then be reviewed and integrated. 