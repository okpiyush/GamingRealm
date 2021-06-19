function start() {
    setTimeout(function () {
        $('#start').fadeOut();
    }, 100);
}
var scener = 0;

function movie1(scener) {
    start();

    play(scener);
}

function movie2(scener) {
    start();
    play2(scener);
}

function play(scener) {
    console.log(scener)
    if (scener == 0) {
        document.getElementById("vid").style.backgroundImage = "url('scene10.gif')";
        document.getElementById("textc").textContent = "A boy raised by boars who wears a boar's head (Inosuke) and another boy who reveals his true power when he sleeps (Zenitsu) and A boy whos family was killed by demons(Tanjiro) with his half demon converted sister(Nezuko), board the Infinity Train on a new mission with the Flame Pillar(Rengoku). Their mission is to defeat a demon who has been tormenting people and killing the demon slayers who oppose it."
    }
    else if (scener == 1) {
        document.getElementById("vid").style.backgroundImage = "url('scene1.gif')";
        document.getElementById("textc").textContent = "Nezuko tries to wake brother tanjiro up from the demon art spell that made everyone on the train sleep unconciouslly..."
    }
    else if (scener == 2) {
        document.getElementById("vid").style.backgroundImage = "url('scene2.gif')";
        document.getElementById("textc").textContent = "Tanjiro avades out to find the demon that has been killing people, upon finding the demon, is casted with the sleep spell which tanjiro escapes by killing himself in the dream which ends the dream and wakes him up..."
    }
    else if (scener == 3) {
        document.getElementById("vid").style.backgroundImage = "url('scene3.gif')";
        document.getElementById("textc").textContent = "After breaking the demons spell he then sets out to cut the dmons neck which is required to kill the demon and stop their regeneration but he soon notices demon has some other tricks under their sleeves and does not die and rather diappear..."
    }
    else if (scener == 4) {
        document.getElementById("vid").style.backgroundImage = "url('scene4.gif')";
        document.getElementById("textc").textContent = "Tanjiro realises the demon has bounded himself to the train to avoid getting slaugtered in the hands of the demon slayers making it difficult for them to find his neck to kill the demon..."
    }
    else if (scener == 5) {
        document.getElementById("vid").style.backgroundImage = "url('scene5.gif')";
        document.getElementById("textc").textContent = "The demon starts trying to consume the fellow passengers of the train which are still sleeping thou is stopped my Zenitsu, Nezuko and Rengoku protecting the passengers. All this while Inosuke and Tanjiro Found a way to kill the demon and kills him..."
    }
    else if (scener == 6) {
        document.getElementById("vid").style.backgroundImage = "url('scene6.gif')";
        document.getElementById("textc").textContent = "Tanjiro being Heavily injured, Rengoku goes onto check on to check on Tanjiro. All this among an unfortunate event occurs and another powerfull demon known as Akaza shows up who is one(Number 3) of the 12 most powerfull demons among the tribe..."
    }
    else if (scener == 7) {
        document.getElementById("vid").style.backgroundImage = "url('scene7.gif')";
        document.getElementById("textc").textContent = "Then A battle between the two legends take place Rengoku and Akaza while Rengoku tris to weak and dissable his enemy by cutting off his arms Akaza instantly regerates all the lost body parts..."
    }
    else if (scener == 8) {
        document.getElementById("vid").style.backgroundImage = "url('scene8.gif')";
        document.getElementById("textc").textContent = "Akaza then tries to attack back on Rengoku who is unable to regerate the injuries due to being a normal human and is heavily injured and hence is beaten to death while AKaza is Still uninjured..."
    }
    else if (scener == 9) {
        document.getElementById("vid").style.backgroundImage = "url('scene9.gif')";
        document.getElementById("textc").textContent = "After defeating Rengoku Akaza thinks to attack Tanjiro and others but realises its gonna be broad daylight soon and flies the scene Tanjiro being heavily injured is unable to follow Akaza and is left there watching the formalk Legend Hashira Rengoku Die..."
    }
    else if (scener == 10) {
        document.getElementById("vid").style.backgroundImage = "url('scene10.gif')";
        document.getElementById("textc").textContent = "Finally the show end ends with their mission completed with the demon on the train being killed with the tragic loss of the Hashira Rengoku while all others were saved and rescued... THE END"
    }
    else {
        document.getElementById("textc").textContent = "THE END THANK U FOR WATCHING";
    }



    var onclick = "play(" + (scener + 1) + ")";
    console.log(onclick);
    document.getElementById("ford").setAttribute("onclick", onclick)
}

function play2(scener) {

    if (scener == 0) {
        document.getElementById("vid").style.backgroundImage = "url('nemoplain.jpg')";
        document.getElementById("textc").textContent = "After his son(Nemo) gets abducted from the Great Barrier Reef and is dispatched to Sydney, Marlin, a meek clownfish, enlists the help of a forgetful fish(Dory) and embarks on a journey to bring him home."
    }
    else if (scener == 1) {
        document.getElementById("vid").style.backgroundImage = "url('Nemo1.gif')";
        document.getElementById("textc").textContent = "Nemo's attempt in doing the impossible that is touching the fishing boat gets him abducted by the fisherman and he's father not being able to find him embarks on a a journey to find him where he finds a forgetful fish Dory..."
    }
    else if (scener == 2) {
        document.getElementById("vid").style.backgroundImage = "url('nemo2.gif')";
        document.getElementById("textc").textContent = "Along the journey they uncounter a dangerous looking shark that actually helps them by giving directions to where the fisherman could have gone all this while Nemo gets sold off to a dentist where he's kept in their personal little aquarium..."
    }
    else if (scener == 3) {
        document.getElementById("vid").style.backgroundImage = "url('nemo3.gif')";
        document.getElementById("textc").textContent = "Following the route had them go through deep parts of the ocean which had them deal with the most of the many dfangerous predators of the deep deep ocean and them edging to survive..."
    }
    else if (scener == 4) {
        document.getElementById("vid").style.backgroundImage = "url('nemo4.gif')";
        document.getElementById("textc").textContent = "Among all the predators they finally were happy to see a friendly face that of a tortouise known to be the creatures that live old enough to know about most part of the ocean, they get a ride with the tortouise and travel through a whirlpool where eventually they get trapped inside a whale's mouth..."
    }
    else if (scener == 5) {
        document.getElementById("vid").style.backgroundImage = "url('nemo5.gif')";
        document.getElementById("textc").textContent = "Somehow managing to escape the whale they get thrown off to thw coast where they are surrounded by seagulls that start fighting among each other to eat them but they are saved by another bird that knows where nemo is agrees to carry them to the dentist's office..."
    }
    else if (scener == 6) {
        document.getElementById("vid").style.backgroundImage = "url('nemo6.gif')";
        document.getElementById("textc").textContent = "While that day dentist's daughter visits her dad and is well known by the fishes there to take fishes in small bags that dont end up in a nice place or survive well. Seagull arrives at the dentist's office, dentist seeing the seegul tries to shoo it off..."
    }
    else if (scener == 7) {
        document.getElementById("vid").style.backgroundImage = "url('nemo7.gif')";
        document.getElementById("textc").textContent = "While the dentist away the other fishes try to scare the girl away so she drops the fishbag and nemo can escape and while they are successful in the act nemo gets flushed through the water bin into the sewage while the seagull drops Marlin and Dory back to the ocean as he cannot help them anymore..."
    }
    else if (scener == 8) {
        document.getElementById("vid").style.backgroundImage = "url('nemo8.gif')";
        document.getElementById("textc").textContent = "Marlin losing all hope of getting Nemo back starts to swim back to his house leaving dory behind, just as he leaves Nemo comes out of the drain infront of Dory, Dory having found Nemo moves full speed to reunite Nemo with his dad Marlin..."
    }
    else if (scener == 9) {
        document.getElementById("vid").style.backgroundImage = "url('nemo9.gif')";
        document.getElementById("textc").textContent = "Just as the reunion was going too good they get captured by another fishing boat but with the help of teamwork and swimming together, they are able to eacape the fishing net. Finally Marlin Dory and Nemo Swim back to their house where they belong"
    }
    else if (scener == 10) {
        document.getElementById("vid").style.backgroundImage = "url('nemoplain.jpg')";
        document.getElementById("textc").textContent = "The movie ends with Marlin travelling the whole ocean with all kinds of predators amd dangers just to be able to be reunited with his abducted son and didnt loose hope until the end with the help of some strangers and a forgetful fish he was able to get his son Nemo back and return to their home to safety."
    }
    else {
        document.getElementById("textc").textContent = "THE END THANK U FOR WATCHING";
    }

    var onclick = "play2(" + (scener + 1) + ")";
    document.getElementById("ford").setAttribute("onclick", onclick)
}

function back() {
    window.location.reload();
}