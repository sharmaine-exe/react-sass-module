
# Running Modules Locally
First of all it's not mission critical to add the local ./node_modules directory to your system path. I just wanted to take the time to answer the questions online about the various commands I use in the terminal.


## NPX Best For New Users
The easiest way to use packages from the NPM registry is to use ```NPX```. The npx command allows you to execture modules without having to have them installed. I would suggest this to all new users if you are not comfortable editing the PATH variables on your system.



## Adding ./node_modules to the PATH 
If you want to add node modules from the current directory without having to use the npx command then you will have to read through the links in below on how to add to the windows or macintosh path.  

<br/>
The path your adding is shown below. The ```./``` is current directory. What your trying to tell your shell is where to look for files when you type in the terminal. This path may look different from windows to mac. However it will basically be the same. Your trying to point to the local node_modules directory. All executable packages are placed in the ```.bin``` directory. Think of it as installing a piece of software into your applications directory.

```bash
# NODE_MODULES Local Directory
 ./node_modules/.bin:$PATH
```  

<br/>

For my operating system I am running the zsh shell. So I have to add the path to my .zshrc which is a configuration file that tell the shell any custom configiration I may have

```zsh
# NODE_MODULES
export PATH=./node_modules/.bin:$PATH
```




## Adding Node_Modules Directory The Windows Path
[Adding To The Windows Path](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/)

## Adding Node_Modules To .zshrc (MAC)
[Mac how to edit .zshrc](https://linuxhint.com/add-a-directory-to-path-in-zsh/)
