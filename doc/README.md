#### Install the JDK

Install Oracle JDK 8 using the following
```
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update && sudo apt-get install oracle-java8-installer
```
Go through the installer screens, nothing to configure

#### PostgreSQL

Open Terminal and run
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
sudo -u postgres createdb txbits_testnet
sudo -u postgres psql txbits_testnet
txbits_testnet=# CREATE USER "user" WITH SUPERUSER PASSWORD 'password';
txbits_testnet=# GRANT ALL PRIVILEGES ON DATABASE txbits_testnet TO "user";
txbits_testnet=# CREATE DATABASE txbits_test;
txbits_testnet=# GRANT ALL PRIVILEGES ON DATABASE txbits_test TO "user";
txbits_testnet=# \q
```

#### Get the source code

Open Terminal and run
```
git clone https://github.com/txbits/txbits.git
cd txbits/
./txbits.sh compile
./txbits.sh gen-idea
```
* You can use `./txbits.sh run` to start the frontend and access it at `http://localhost:9000/`
* The first time you run, a webpage will ask you to apply a database evolution, click apply to initialize it

#### Install IntelliJ IDEA

Download the free Community Edition at http://www.jetbrains.com/idea/download/
* Run
```
tar -zxvf ~/Downloads/ideaIC-13.1.4b.tar.gz
cd ideaIC-13.1.4b.tar.gz/bin/
./idea.sh
```
* Click Configure > Plugins
* Click Browse repositories
* Find Scala and double click to install
* _Optional:_ Select IdeaVim and double click to install (adds Vim keys)
* Click through the rest of the screens, you can deselect some of the preconfigured plugins that are unnecessary or just leave them
* Open Project > ~/txbits/txbits
* Click File > Project Structure > SDKs > Right click and Add New SDK > JDK > java-7-oracle folder (window should already open to /usr/lib/jvm) > Click OK
* Click File > Settings > Scala (in the lower half, under IDE Settings heading) > under JVM SDK drop down, select 1.7 (the one we just added) > Click OK
* Click File > Project Structure > Project > Select Project SDK 1.7 > Click OK

#### _Optional:_ bitcoind

Download the Bitcoin for Linux binary at https://bitcoin.org/en/download
* Extract bitcoin-0.x.x.x-linux/bin/64/bitcoind (only that one file is needed) to your home folder
* Run bitcoind so it gives you an error about no bitcoin.conf and exits (this makes a data folder)
```
./bitcoind
```
* Configure your RPC credentials and enable testnet in ~/.bitcoin/bitcoin.conf
* Edit the txbits conf files to enable the wallet actor for Bitcoin

#### _Optional:_ litecoind

Download the Litecoin for Linux binary at https://litecoin.org
* Extract litecoin-0.x.x.x-linux/bin/64/litecoind (only that one file is needed) to your home folder
* Run litecoind so it gives you an error about no litecoin.conf and exits (this makes a data folder)
```
./litecoind
```
* Configure your RPC credentials and enable testnet in ~/.litecoin/litecoin.conf
* Edit the txbits conf files to enable the wallet actor for Litecoin

#### Configure Git Hooks
```
rm -f .git/hooks/pre-commit
ln -s ~/txbits/dev/pre-commit .git/hooks/pre-commit
```
