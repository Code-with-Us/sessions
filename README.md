# sessions
One-stop shopping for the supporting material for our meet ups where we try to improve our skills.

## Code along
We will try to add any code from our sessions here. Hopefully, we can provided starter code, but it will be available after each session.
Feel free to fork/clone this repository in order to follow along during any of the session or experiment on your own. We recommend creating your own `branch` to avoid conflicts when you `pull` for updated content.

For independent coding use:
```shell
git checkout -b <branch name>
``` 

## Updates
### Clone

To clone the repository, navigate to your directory of choice and run the command:
```shell
git clone https://github.com/Code-with-Us/sessions.git
```
As previously stated, we recommend reserving the master branch for content updates, but feel free to do as you will.
#### To Sync
Via pull:
1. Checkout the master branch or another if you choose.
    ```shell
    git checkout <master | branchName>
    ```
2. Then pull: 
    ```shell
    git pull origin master
    ```
Via fetch: 
1. Fetch 
   ```shell
   git fetch origin master
   ```
2. Checkout the branch to hold the update. 
   ```shell
   git checkout <master | branchName>
   ```
3. Merge 
   ```shell
   git merge origin/master
   ```
___
### Fork
1. Click *fork* in [this](https://github.com/Code-with-Us/sessions) repository to get your own personal copy in your Github repository.
2. Clone your version locally to your machine.
   ```shell
   git clone <repo url>
   ``` 
3. Add [this](https://github.com/Code-with-Us/sessions) repository as an upstream remote.
   ```shell
    git remote add upstream https://github.com/Code-with-Us/sessions.git
   ``` 
#### To Sync
Via pull:
1. Checkout the master branch or another if you choose.
    ```shell
    git checkout <master | branchName>
    ```
2. Then pull: 
    ```shell
    git pull upstream master
    ```
3. [Optional] Push updates to your remote.
   ```shell
    git push origin <master | branchName>
   ```
Via fetch: 
1. Fetch 
   ```shell
   git fetch upstream master
   ```
2. Checkout the branch to hold the update. 
   ```shell
   git checkout <master | branchName>
   ```
3. Merge 
   ```shell
   git merge upstream/master
   ``` 
4. [Optional] Push updates to your remote.
   ```shell
    git push origin <master | branchName>
   ```