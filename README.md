# sei-group-project
a General Assembly project by Sim, Sheema and Tom


Merging your changes
Merging means getting your changes from your laptop, into the GitHub development branch where the rest of the team can see it

Before starting:
- Pull the existing development branch first <code>git pull origin development</code> before you begin — V IMPORTANT!!
- Create a new branch <code>gco -b name-of-feature</code>
- Make sure you’re in the new feature branch
- You can start coding

When you’re done:
- Merge away from development first, before merging into development using <code>git merge development</code> when you are in the feature branch
- If there are any conflicts, have a conversation!!!!
- If there are no conflicts, switch into the development branch using <code>gco  development</code>
- merge your feature branch into development using the command <code>git merge xxx-branch</code>
- If you are sure everything is working, push everything to GitHub… <code>git push origin development</code>

Some rules for git and GitHub
1. *NEVER* work directly on the master branch
2. *NEVER* work directly on the development branch
3. Keep your branch names clean and clear
    - *YES*: login-form
    - *NO*: cheese-branch-57
4. Communicate, communicate, communicate!!!
