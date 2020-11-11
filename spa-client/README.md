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

Setup an Azure Web App. Head over to [Azure](https://portal.azure.com/)

### 3.1

Prepare the web app.

- Create a resource group in the West European region. (West is closer than North)
- Create a "Web App" resource:
  - Pick a .NET runtime. We recommend .NET Core 3.1.
  - Pick the Windows operation system. Required for our static application, as the IIS can be configured by code.
  - Create an App Service Plan. Be sure to pick the cheapest you can.

### 3.2 (optional)

Let's make your web app secure.

Azure provides something called Easy Auth. A quick way to lock your app with the internal AD from your Azure account.
Inside the Web App there is a section called Settings. There pick "Authentication / Authorization".

After turning on Auth you then need to pick : Log in with Azure Active Directory" in the dropdown and then proceed to configure the AAD provider.

In the AAD config, simply pick Express Management mode and click OK. This will set up an AAD application registration and tie the OAuth flow up to that app registration.

Finally, click Save.

Your application is now only reachable by users in your Azure account, which if this is your first time using Azure is only you.

### 3.3

Head back over to Azure DevOps.

Your final task is to setup a deployment task in the provided pipeline. [./.ci/assignment3.yaml](.ci/assignment3.yaml)
You need to zip your content, be aware of the directories.

The tasks you should use are:

- Azure Web App
- Archive files.

Note that in this pipeline, the trigger has changed.

### Solution

Solution provided in future branch:
`git checkout assignment/4`

## 4

This is the final assignment. All we need to do is build the final pipelines. These you are to build yourself from scratch.
We require two pipelines.

### 4.1

The first pipeline is our CI pipeline. Recall what CI is and build a pipeline that triggers on every push to `development`.
We do not expose anything to developers in this project, so all the CI pipeline needs to do is ensure the app follows all linting rules,
can be built, and covers the specified test coverage targets.

Hints: [1](https://docs.npmjs.com/cli/v6/using-npm/scripts#prepare-and-prepublish) [2](https://docs.npmjs.com/cli/v6/commands/npm-install-ci-test)

### 4.2

The second pipeline is our CD pipeline. CD here should deploy directly out to the Azure App when any tag starting with `v` is added. Like
`v1.0.0` or `v1.0.1-canary1`.

Since this pipeline can trigger on branch you are required to build the app, even if it is triggered on the `development` branch running the CI pipeline.

### 4.3 (optional)

If you are still here, there is a little extra good for you. The app we have provided supports a build time variable. So if you change the variable APP_NAME in the pipeline to any text you should see this text once the app is deployed.

This is useful when building big application that needs to be "tagged" with a build version. [See this for more info](https://docs.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml#build-variables-devops-services) -> `Build.SourceBranch`

### Solution

Solution provided in future branch:
`git checkout final`

</details>
