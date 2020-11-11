# SPA Client

This is a fully built test-driven React application, ready to be exported to a static bundle - functioning as a SPA.

## Setup code locally

```shell
cp .env.example .env.local

npm i
```

## Assignments

<details>
  <summary>Click to expand!</summary>

## 1

### 1.1

Let's get familiar with the general building process of our SPA.

The following npm scripts have been provided.

- build
- clean
- export
- test
- lint

Your first assignment is to describe each of these scripts.
What you expect them to do, and why they might be important for the project.

### 1.2

Next, you need to provide an order in which to run these script to provide a fully deployment-ready static bundle
containing our SPA.

### 1.3

Get familiar with [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/)

### 1.4

Now let's build a YAML file for Azure pipelines.
Provided is a yaml declaration of a Azure pipeline located at [./.ci/assignment1.yaml](.ci/assignment1.yaml).

To get you started here is some information about [stages, jobs, steps and tasks](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/key-pipelines-concepts?view=azure-devops#stage).

- stages
  > You can organize the jobs in your pipeline into stages. Stages are the major divisions in a pipeline: "build this app", "run these tests", and "deploy to pre-production" are good examples of stages. They are a logical boundary in your pipeline at which you can pause the pipeline and perform various checks.
- jobs
  > A deployment job is a special type of job that's a collection of steps, which are run sequentially against the environment. A deployment job and a traditional job can exist in the same stage.
- steps
  > A step is the smallest building block of a pipeline. For example, a pipeline might consist of build and test steps. A step can either be a script or a task. A task is simply a pre-created script offered as a convenience to you. To view the available tasks, see the Build and release tasks reference. For information on creating custom tasks, see Create a custom task.
- tasks
  > A task is the building block for defining automation in a pipeline. A task is simply a packaged script or procedure that has been abstracted with a set of inputs.

With this information, you should now be able to extend the provided file to

1. print out `Hello World`
2. install node modules ([_hint_](https://docs.npmjs.com/cli/v6/commands/npm-ci))
3. run tests

### Solution

Solution provided in future branch:
`git checkout assignment/2`

## 2

For this next assignment, we will explore the different ways of building a pipeline for Azure DevOps.

During the first assignment, you might have built the pipeline by writing directly in the .yaml file.
This is not a bad way and most developers would prefer this way. Azure, however, isn't as developer-friendly as other CI/CD tools.
Each different Tasks comes with its object structure, and the only formatting help you can get is from the online editor itself.

Head over to Azure DevOps and ensure you have a pipeline set up.

### 2.1

Edit the provided pipeline [./.ci/assignment2.yaml](.ci/assignment2.yaml) with the online editor.
On the right-hand side, you should see a "tasks" menu.

Find the GitHub comment and finish setting up the task such that the pipeline will write a comment on an issue in your repo.
_Hint: You can click the "About this task" to see how to configure it_

### 2.2

Let's finish the pipeline for our code. Recall the script procedure from [1.2](##1.2).

### Solution

Solution provided in future branch:
`git checkout assignment/3`

## 3

`git checkout assignment/3`

### Solution

Solution provided in future branch:
`git checkout assignment/4`

## 4

`git checkout assignment/4`

### Solution

Solution provided in future branch:
`git checkout assignment/5`

</details>
