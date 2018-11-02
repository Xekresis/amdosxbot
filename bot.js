const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

let prefix = ">";
let color = "0xDC143C";
let amdosxpicture = "https://cdn.discordapp.com/icons/249992304503291905/8502ffd49810685b7b3afd9a5140be2d.jpg";

bot.on('ready', () => {
    console.log("")
    console.log("-------AMDOSX Helpbot-------    ")
    console.log("                                ")
    console.log("   Name: " + bot.user.tag + "   ")
    console.log("     State: Connected           ")
    console.log("                                ")
    console.log("---------------------------     ")

    bot.user.setActivity(config.game)

});

bot.on('message', async msg => {

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if(msg.content.startsWith(prefix)) {

    console.log(msg.author.tag + " used: " + cmd)

    switch(cmd) {
      case "setgame":
        if(msg.member.hasPermission("MANAGE_MESSAGES")) {
          if(args.join(" ")) {
            let game = args.join(" ");
            config.game = game;
            fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
            bot.user.setActivity(args.join(" "));
            msg.channel.send("I'm now playing " + args.join(" "));
          } else {
            msg.reply("I can't play nothing!");
          
        }
      }
              
        break;
      case "say":
        console.log("The Message was: " + args.join(" "))
        if(msg.member.hasPermission("MANAGE_MESSAGES")) {
          const sayMessage = args.join(" ");
          msg.channel.send(sayMessage);
          break;
        } else {
          msg.channel.send("I don't wan't to say that!")
          
        }
        break;
      case "sayembed":
      console.log("The Message was: " + args.join(" "))
        if(msg.member.hasPermission("MANAGE_MESSAGES")) {
          const sayMessage = args.join(" ");
          const sayembed = new Discord.RichEmbed()
          .setAuthor(msg.author.tag, msg.author.avatarURL)
          .setDescription(sayMessage)
          .setColor(color)
          msg.channel.send(sayembed);
          break;
        } else {
          msg.channel.send("I don't wan't to say that!")
        }
        break;
      case "test":
        msg.channel.send("Test")
        break;
      case "forum":
        msg.channel.send("https://forum.amd-osx.com/")
        break;
      case "info":
        const infoembed = new Discord.RichEmbed()
        .setAuthor("AMDOSX Bot", amdosxpicture)
        .setDescription("This is a little bot written by me (Xekresis) using Discord.js. \n I developed this Bot to support users faster and easier. \n This Bot can only be used by me. \n If you have any questions pm or tag me.")
        .setColor(color)
        msg.channel.send(infoembed);
        break;
      case "efi":
        const efiembed = new Discord.RichEmbed()
        .setAuthor("How to copy the EFI Folder", amdosxpicture)
        .setDescription("First download Clover Configurator from here (if you haven't already): http://bit.ly/ccvamdosx/ \n Open it and click on the -Mount EFI- Tab \n Mount the EFI on your USB and HDD/SSD\n Copy the EFI Folder from the USB to your HDD/SSD")
        .setColor(color)
        msg.channel.send(efiembed);
        break;
      case "bios":
        const biosembed = new Discord.RichEmbed()
        .setAuthor("BIOS Settings for AMD OS X", amdosxpicture)
        .setDescription("Execute Virtual Bit: Enabled \nSecure Virtual Machine(SVM): Disabled\nCool 'n Quiet = Enabled\nAPU = Disabled\nSpread Spectrum = Auto\nSerial & Parallel = Disabled\nHPER = Enabled\nEHCI Handoff = Enabled\n XHCI Handoff = Enabled\nSata Mode = AHCI\nIDE = Disabled\nIOMMU = Disabled\nHPC = Disabled")
        .setColor(color)
        .setFooter("Credits to CorpBot");
        msg.channel.send(biosembed)
        break;
      case "fakeid":
        const gpuembed = new Discord.RichEmbed()
        .setAuthor("AMD GPU using Clover", amdosxpicture)
        .setDescription("Radeon FakeID:\n\nHD4000: 0x94901002\nHD 5000: 0x68E01002\nHD 6000: 0x68E01002\nHD 7000: 0x68181002\nR9 200/300: 0x67B01002\n R9 300: 0x69381002\nRX400: 0x67EF1002\n\nFBName: Radeon\n\nDon't use modified AMD Controllers!")
        .setColor(color)
        .setFooter("Credits to CorpBot");
        msg.channel.send(gpuembed)
        break;
      case "cuefi":
        const cuefiembed = new Discord.RichEmbed()
        .setAuthor("Clover Settings for UEFI", amdosxpicture)
        .setDescription("Install Clover for UEFI only\nInstall Clover in ESP\n\nDrivers64UEFI:\n>AptioMemoryFix\n>PartitionDxe\n>ApfsLoader(if you're using APFS)\nDon't touch the pre ticked options\n\nInstall RC Scripts on target volume")
        .setColor(color)
        .setFooter("Credits to CorpBot");
        msg.channel.send(cuefiembed)
        break;
      case "clegacy":
        const clegembed = new Discord.RichEmbed()
        .setAuthor("Clover Settings for Legacy", amdosxpicture)
        .setDescription("Install Clover in ESP\nBoot0ss\nClover EFI Sata\n\nDrivers64:\n>UsbMouseDxe\n>UsbKbDxe\n>Ps2MouseDxe\n>XhciDxe\n\nInstall RC Scripts on target volume")
        .setColor(color)
        .setFooter("Credits to CorpBot");
        msg.channel.send(clegembed)
        break;
      case "cpu":
        const cpuembed = new Discord.RichEmbed()
        .setAuthor("Fix unkown CPU", amdosxpicture)
        .setDescription("Open Terminal\nType: cp /System/Library/PrivateFrameworks/AppleSystemInfo.framework/Versions/A/Resources/English.lproj/AppleSystemInfo.strings ~/Desktop/\n Open �AppleSystemInfo.strings� on your Desktop with TextWrangler and change Unkown CPU Type, Unkown to whatever you want\n then run: sudo codesign -f -s - ~/Desktop/AppleSystemInfo.strings and sudo cp ~/Desktop/AppleSystemInfo.strings /System/Library/PrivateFrameworks/AppleSystemInfo.framework/Versions/A/Resources/English.lproj/\n and reboot your System\n(You may have to change the Text from English to the language you use for macOS)")
        .setColor(color)
        .setFooter("Credits to climbjoe");
        msg.channel.send(cpuembed)
        break;
      case "update":
        const updateembed = new Discord.RichEmbed()
        .setAuthor("Update HighSierra", amdosxpicture)
        .setDescription("For HighSierraAMD: \nDownload and install the 10.13.3 Combo Update and run preinstall\nAfter the second installation part finished boot back to the installer and type amd\n\nFor AMDHS:\nDownload and install the 10.13.3 Combo Update and run xlnc and choose preinstall in the Terminal\nAfter the second installation part finished, run xlnc again and choose postinstall")
        .setColor(color)
        .setFooter("Credits to CorpBot");
        msg.channel.send(updateembed)
        break;
      case "install":
        const installembed = new Discord.RichEmbed()
        .setAuthor("Install HighSierraAMD", amdosxpicture)
        .setDescription("Boot to the installer\nFormat your Disk using Disk Utility\nInstall macOS\nBoot back to the installer\nType preinstall in terminal\nBoot to the hdd and let it install\nBoot back to the installer and type amd\nNow you can boot to your System!")
        .setFooter("You still need your USB to boot until you installed Clover on your HDD/SSD!")
        .setColor(color)
        msg.channel.send(installembed)
        break;
      case "installxlnc":
        const installxlncembed = new Discord.RichEmbed()
        .setAuthor("Install AMDHS", amdosxpicture)
        .setDescription("Boot to the installer\nFormat your Disk using Disk Utility\nInstall macOS\nBoot back to the installer\nType xlnc and choose postinstall\nNow you can boot to your System!")
        .setFooter("You still need your USB to boot until you installed Clover on your HDD/SSD!")
        .setColor(color)
        msg.channel.send(installxlncembed)
        break;
      case "io":
        const ioembed = new Discord.RichEmbed()
        .setAuthor("Stuck at IOProviderClass", amdosxpicture)
        .setDescription("This is a common issue when using HighSierraAMD V3.\n Try using this version instead: http://bit.ly/2KfegS3")
        .setColor(color)
        msg.channel.send(ioembed)
        break;
      case "trial":
        const trialembed = new Discord.RichEmbed()
        .setAuthor("Reset Transmac Trial", amdosxpicture)
        .setDescription("Open regedit(Windows Key + R, then type regedit) and delete: HKCU-Software-Microsoft-Windows-CurrentVersion-Shell Extensions-Approved-{SOME-UID}")
        .setColor(color)
        .setFooter("Credits to Shawo")
        msg.channel.send(trialembed)
        break;
      case "waiting":
        const waitingembed = new Discord.RichEmbed()
        .setAuthor("Still waiting for root device fix", amdosxpicture)
        .setDescription("If you have USB 3:\nBoot using USB 2, wait until it gets to Still waiting for root device. Unplug the USB and put it in USB 3\n\nIf you dont have USB 3:\nUse these bootflags EHCIacquire=Yes USBLegacyOff=Yes UHCIReset=Yes\n\nMake sure you are using the right bios settings!")
        .setColor(color)
        .setFooter("Credits to CorpBot")
        msg.channel.send(waitingembed)
        break;
      case "links":
        const linksembed = new Discord.RichEmbed()
        .setAuthor("Important Links", amdosxpicture)
        .setDescription("AMD OS X Official: https://amd-osx.com/\n\nSierraAMD 5.2: http://bit.ly/2qJ2vLb\nSierraAMD 5.2 Enoch: http://bit.ly/SierraAMDb\nHighSierraAMD V3 Unofficial:  http://bit.ly/2KfegS3\nXLNC AMDHS V2 Clover: https://goo.gl/eCzNyc\nXLNC AMDHS V2 Enoch: https://goo.gl/cSAhrV")
        .setColor(color)
        const links2embed = new Discord.RichEmbed()
        .setDescription("SmallTreeIntel: http://bit.ly/SmallTreeIntel\nRealtekRTL: http://bit.ly/RealtekRTL\nVoodoHDA: http://bit.ly/VoodoHDA\nFakeSMC: http://bit.ly/FakeSMCHS")
        .setColor(color)
        .setFooter("Credits to CorpBot")
        msg.channel.send(linksembed)
        msg.channel.send(links2embed)
        break;
      case "help":
        const helpembed = new Discord.RichEmbed()
        .setAuthor("AMDOS X Bot Commands", amdosxpicture)
        .setTitle("The prefix is >")
        .addField("forum:", "Sends the Forum Link")
        .addField("info:", "Gives you information about the Bot")
        .addField("efi:", "Shows you how to copy the EFI Folder")
        .addField("bios:", "Shows you the macOS Bios Settings")
        .addField("fakeid:", "Shows you the AMD Fake ID's")
        .addField("cuefi", "Shows you the Clover UEFI Settings")
        .addField("clegacy", "Shows you the Clover Legacy Settings")
        .addField("cpu", "Shows you how to fix CPU: Unkown")
        .addField("update", "Shows you how update macOS")
        .addField("install", "Shows you how to install HighSierraAMD")
        .addField("installxlnc", "Shows you how to install AMDHS")
        .addField("io", "IOProviderClass fix")
        .addField("trial", "Shows you how to renew your Transmac Trial")
        .addField("waiting", "Shows you how to fix Waiting for Root Device")
        .addField("links", "Shows you useful links")
        .addField("help", "Shows you this help message")
        .addField("efiwindows", "Shows you how to mount the EFI using Windows")
        .addField("unkowncpu", "Shows you how to change the CPU Name in about this mac.")
        .addField("clear", "Deletes the given Messages")
        .setColor(color)
        .setFooter("Bot by Xekresis")
        msg.channel.send(helpembed)
        break;
      case "efiwindows":
        const efiwinembed = new Discord.RichEmbed()
        .setAuthor("Mount EFI on Windows", amdosxpicture)
        .setDescription("Open CMD as Admin\nType diskpart\nFind your target Disk with list disk\nselect disk (target)\nselect partition 1\nassign")
        .setColor(color)
        msg.channel.send(efiwinembed)
        break;
      case "unkowncpu":
        const unkowncpuembed = new Discord.RichEmbed()
        .setAuthor("Change CPU Name", amdosxpicture)
        .setDescription("On macOS run `bash <(curl -s https://raw.githubusercontent.com/XLNCs/UsefullScripts/master/cpunamefix.sh)` in the Terminal \nThen follow the instructions on the screen.")
        .setColor(color)
        msg.channel.send(unkowncpuembed)
        break;
      case "clear":
        if(msg.member.hasPermission("MANAGE_MESSAGES")) {
          const number = parseInt(args[0], 10);
          if(number > 2 || number < 100) {
            const fetched = await msg.channel.fetchMessages({limit: number});
            msg.channel.bulkDelete(fetched).catch();
            console.log("He cleared " + number + " messages")
          }
        } else {
          
        }
        break;               
    }
  }
});

bot.login("token :3");
