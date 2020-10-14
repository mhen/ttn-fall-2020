# SPA Client

This is a fully built test driven React application, ready to be exported to a static bundle - functioning as a SPA.

## Setup

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

Your first assignment is describe each of these scripts.
What you expect them to do, and why they might be important for the project.

### 1.2

Next, you need to provide an order in which to run these script to provide a fully deployment ready static bundle
containing our SPA.

### 1.3

Now lets build a yaml file for Azure pipelines.
Provided is a yaml declaration of a Azure pipeline located at [./.ci/assignment1.yaml](.ci/assignment1.yaml).

To get you started here are some information about [stages, jobs, steps and tasks](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/key-pipelines-concepts?view=azure-devops#stage).

- stages
  > You can organize the jobs in your pipeline into stages. Stages are the major divisions in a pipeline: "build this app", "run these tests", and "deploy to pre-production" are good examples of stages. They are a logical boundary in your pipeline at which you can pause the pipeline and perform various checks.
- jobs
  > A deployment job is a special type of job that's a collection of steps, which are run sequentially against the environment. A deployment job and a traditional job can exist in the same stage.
- steps
  > A step is the smallest building block of a pipeline. For example, a pipeline might consist of build and test steps. A step can either be a script or a task. A task is simply a pre-created script offered as a convenience to you. To view the available tasks, see the Build and release tasks reference. For information on creating custom tasks, see Create a custom task.
- tasks
  > A task is the building block for defining automation in a pipeline. A task is simply a packaged script or procedure that has been abstracted with a set of inputs.

With this information you should now be able to extend the provided file to

1. print out `Hello world`
2. run tests
3. ???

### Solution

Solution provided in future branch:
`git checkout assignment/2`

## 2

`git checkout assignment/2`

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
