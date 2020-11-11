# Tech Talent Night fall 2020

This is an assignment / workshop given by [IT Minds](https://it-minds.dk) to the participants of our
Tech Talent Night November 2020.

---

To start with you need to fork this repository.

This assignment is split into two parts.
The way both parts work is as followed. Starting on both `main` and `assignment/1` the first assignment is written in the readme.
Start by branching out `git checkout -b solution/1`. Once done the next assignment contains the solution for the previous.
Meaning, that if you want to continue working on your own code we advice you to do the following.
`git checkout -b solution/2 && git rebase origin/assignment/2`.

NOTE: remember to commit often and as scoped as possible to help yourself.
NOTE: files that you should avoid editing:

- `README.md`
- any in `src/*`

[First part](./spa-client) is a static SPA ready to be built and shipped. Head over to the [README](./spa-client/README.md) there to see the first assignment.

[Second part](./dotnet-service) is a .NET Core service meant to be hosted in a container / web service.
