# Monthly Health Checking
The document outlines an "Automation challenge activity" for QAs at Huge, aiming to enhance their automation skills. The objective is to equip QAs to effectively contribute to projects by resolving a practical automation testing challenge. This is a mandatory activity for all QAs at Huge and is designed to be a realistic QA scenario emphasizing critical thinking, automation scripting, research, and ownership.
## Pre-requisites
- Git latest [version](https://git-scm.com/download/mac) 
- Install Java [JDK](https://www.oracle.com/java/technologies/downloads/#java17) version 17
- Install the latest version of [VSC](https://code.visualstudio.com/) 

### Open Visual Studio Code
In the left panel click in extensions and install the following:
- Java Extension Pack

Verify if once a Java extension pack was installed the following also was installed
- Project Manager for Java
- Maven for Java
- Test Runner for Java
<img width="1322" alt="image" src="https://github.hugeinc.com/storage/user/577/files/7c4a0e65-38de-44af-a7d4-db32e89317b6">

## Installation
Create a folder in your local and open the console in that location and run the command
 ```sh
git init
```
then Clone the project from repository 
 ```sh
git clone https://github.hugeinc.com/OLATech/stla-efp-screenshot-builder.git
```

move to the folder
 ```sh
cd stla-efp-screenshot-builder
```

It's a Maven project where all configurations are handled by the pom.xml, those configurations could be found in the [maven repository](https://mvnrepository.com/). 
- selenium (tool to find the elements in dom)
- webdrivermanager (manage the laptop browser to execute the test scenarios)
- testng (write test cases)
- apache POI (manage xlsx files)


<img width="1760" alt="image" src="https://github.hugeinc.com/storage/user/577/files/7c8e104e-0d47-470d-8bd5-ea6243ca9dd0">


In the SRC file you can find the folders "main" and "test"

<img width="341" alt="image" src="https://github.hugeinc.com/storage/user/577/files/9416bde9-c9f1-4aa9-923e-04c59ad6e453">

In the main folder the you can find the classes "ConfigBase" and "Utils"
- ConfigBase, for parametrize the initial configuration previous to execute the test case.
- Utils to add actions in the page e.g. wait_to_element_present

And in the test folder, you can find "objects" - "resources" - "TestScenarios" - "Execution Report" - "drivers"
- Objects, have the class EFP in that class represent the End Frame Preview objects and functions to execute from testScenarios and Regresion, page object based in EFP regression test escenarios.
- resources, have the data mentioned at the top "DataPreparation.xlsx"
- TestScenarios, send the order to generate the evidence for different brands
- Execution Report, report generated after execution
- drivers, chrome driver to execute the lattest version of chrome Current:  119.0.6045.123

## Note 
the paths to read the files or save the screenshots need to be changed according to your location project

### Class EFP method "takeEvidence"
Change the path of line: 
- file = new FileInputStream("/Users/cramos/Documents/stla-efp-screenshot-builder/src/test/java/org/resources/DataPreparation.xlsx");

and update to your current location project.

### Class Utils method "takeScreen"
The project create automatically the folders in "Documents" folder in your local

<img width="1122" alt="image" src="https://github.hugeinc.com/storage/user/577/files/7591fc28-c48b-42ad-be2e-3801552b7f25">


## Execution
### Configure environment and browser 
In @BeforeMethod of
- EFP_Regresion
- EFP_ScreenOffers

you can custom your environment and browser, "mobile" is WIP

### Monthly Healt Checking
By default the execution is in "Headless mode", this means the browser is launched for execution but is not visible in the machine, that aloud to continue in other activities in the laptop meanwhile the execution is complete. If you want to disable this and watch the execution, remove "chromeOptions" from here in "ConfigBase"

<img width="1220" alt="image" src="https://github.hugeinc.com/storage/user/577/files/417620a0-2480-4c02-b23a-35626e630f45">

For execute all testScenarios click here

<img width="1462" alt="image" src="https://github.hugeinc.com/storage/user/577/files/4c0423f5-49ca-4a83-b768-a03ea784f8fc">

or from here for a single teste case

<img width="975" alt="image" src="https://github.hugeinc.com/storage/user/577/files/93af9d3c-4acd-4bf5-a24c-f3194cfe39ea">


If only want to execute an specific test case you could use in the tag @test the following: **@Test(priority = 2,enabled=false)** false for test case not take in account, so true for execute the test and false to not be executed.




