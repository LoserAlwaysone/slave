const fs = require('fs');
const path = require('path');
const warJsonPath = path.join(__dirname, 'spam.json');

function readWarJson() {
	try {
		const jsonData = fs.readFileSync(warJsonPath, 'utf8');
		return JSON.parse(jsonData);
	} catch (error) {  
		return {};
	}
}

function writeWarJson(data) { 
	fs.writeFileSync(warJsonPath, JSON.stringify(data, null, 2));
}

const m = [
"RANDIKO CHOKTAA MUJII RAUTEE KHATE KO XORO AMA CHIKWAA MUJI ",
	"LADOOO LES TAT TC TAUKEE SALLAA XKKKAAA TEORO PUTI MA MERO NAM LEKHXU ABAA",
	"mero laado chusara maardinxu talie ta",
		"chup laag randi chapri",
		"teri aama ko puti van muji",
		"vai ma ta jsto chapri haina",
		"janis muji valu aaime",
		"condom chor ta yaa k gardai xa vaag muji",
		"tero bau ho ma muji aaija khutta dhog randi",
		"tero aama lie chikdai xu ekxin parkhi",
		"machikney tero lado kaatdinxu halla nagar",
		"aaija mero lado chus na ta tso vaa",
		"tero jasto chapri text maa spam hana malie ne aauxa puti mukhey",
		"jawana kaa dekhi kaa pugi sako ta chai yei chapri giri garera bas chikney",
		"gar gar aafno bejat aafai gar muji",
		"ta jsto lie t yei peldinxu chikney",
		"aba chup chap aafno bato laag tero aama lie ramari chikna dey muji",
		"ekxin pakh tero aama lie chiki sakna dey",
		"hora randi yei khusi maa mero lado chus na ta",
		"teri maa chapri text user vaag muji",
		"randi kaa bacha kami kaa bacha mc bahek aru kei vana aaudaina bhai?",
		"chikera maardinxu talie ta",
		"ta jsto randi dherai dekhi sake side laag bhai",
		"padna jaa fuchey see paas gar paila",
		"balla vetis puti mukhey rudai xas hola",
		"haha janis randi ko xora",
	"sab muji puti mukhey heru matra xan",
	"aafno kaam gar muji lado less gawar",
	"OLELEL MUJI NARO NARONA RANDIKO BAN VALU TERI AMA RAMDIKO XORO",
	"LADOLEES XORO MUJI TERI AMA CHIKI CHIKI CONDOM FUTERWWW JANMYAKO TALAII ASLAAA",
	"TERII AMA KO KALO PUTII MA UMMAH",
	 "THOPPDAA PDDIIT SLALA  XORORO TEORO THOPPDA HERDAA MEROO UTHEEKO LADOO NI SUTXA",
	"TWROO AMAA NAII HO MEROO TURUU AND PURE LOVE KANNXXOO",
	"TEROO BAAINI LAI GULAABI PUTII SHOW GARNAA VANTA BAAU KO AGHADDII",
	"TEOROO AAMA NEPAALL TOP RANNDI HAINAA UNIVERSALL TOP RANDI KO KANXXOO",
	 "TEROOO BAAINI RW TEORO AMAA LAAII MERAII SINGLE BED MA DUITAI LAII EUTAI THAU MA SUTAI SANGAII CHIKXU",
	"TEROOO AMA KO SABLEE PUTII CHIKER DULO NI YETROO BHAXA SLAAA",
	"TEORO PURA KHAANNDAN KOCHAREY NI AJHA DHERAI THAU BAKI RAHAANNXA",
	"TEORO AMA KO PUTI MA DAHI HALERW LYAAMM LYAM CHIKAMAMMM BHNNTW",
	"TERII AMA KO KALO PUTII MA LYAMMMA LYAMMA CHKAMM MUJII THUKK LAII LAII MADRCHOOOD BESYYA AMA KO XORO",
	"lauda madharxhoot behenchod bhai ka lauda randi tor puti",
	"Tor mai k chodo buchodi tor mai randi boomer randi bahin k lauda madharxhoot ",
	"RANDIKO CHOKTAA MUJII RAUTEE KHATE KO XORO AMA CHIKWAA MUJI",
		"TEORO AMA KO PUTI MA DAHI HALERW LYAAMM LYAM CHIKAMAMMM BHNNTW",
		"TERII AMA KO KALO PUTII MA LYAMMMA LYAMMA CHKAMM MUJII THUKK LAII LAII MADRCHOOOD BESYYA AMA KO XORO",
	"TEORO AMAA LAAII KOPCHI MAA LAGERW CHIKAAMM RANNDDII MAKAA BAXHHA",
	"TERO AAMA LAAII MERO LADO MAA BASAII NEPAALL GHUMAUXXUU RANNDDI MAA KAA BXHHAA",
	"TEERII MAA KI CHUTT PAKAR K RODDD DALDUU BEHENCHODDD SALA NALAYKK BACHHA ANPADDD MUJIII",
	"TEROO AMAA KO KALO PUTII MA SARAF HAALI GORO BANA JAA XORO",
	"TRII BEHN KI KALII CHUTT UMMAHH MADRCHOOOD EXYY  PJUTII TERIII BAINIKO RATOO RATOO CHIKI CHIKI LYAMMA LYMMA" ,
		"TEOROO AMAA KO PUTTII MAA COKEE HAALII BDAYY PARTY MANAAMAM MEROOLADO KO",
		"MEROO LADOO DHOGNNAA AIJAA SALALA XKK KO BXHHHA RNNDII KO BAXHHAA",
		"TERII BAHINILAII MEROO LADOO MA JHUNDAYE MARDENXUU SALA DAMAII KO BACHHA HAKKK THUUU",
		"HAKKK THUUU MUJIIII VAGGG SALA ABAUU ANGAA BOLNEE AUKAAT BANA PAHELE ANI AIJNAAA ALA RAUTE KO BACHHHA KHIKHIHKHI",
		"MEROO LAODO LE HAANI TEORO KHAANNDANN DAFANN HAANNDDIMM FUCHEHEEE😭💋",
		"MEROO LADOO KO JHATTAROO HANEE TERIII AMA KO TAUKOO FUTALXUU RANDIKO BANN HAHHAHA",
		"TEROO NIDHARR MAA MEROOLAODO KO JHATAROO HAANI CHAAPP BASAUXUU😭💋",
		"LADOOOMA KISS HANN FUVCHHHEE RANDIKO XORO",
		"TERROO AMA KO PUTI MA LAGAII TORI KO TELL CHIKI CHIKI GRDINXXUU PUTI TROO AMA KO FAILLL🤠❤",
		"RANDIKKO BACHHHA SALA UMMMAHH MADRCHOOD TERII AMAMO RATOO PJUTII MAAA ALA PUTII HOWW HANN VANTAA  OA TERII AMA LAII MERO NAM LEYERW",
	"TROO AMAA KO PUTI YETI ADHYARO KALO XA KI CHIKDA TERO AMA LAI TORCH BALI BALI HERNA PARX🤠❤",
	"TEROO KHAANNDAAN LAAII MEROO LADO LE HANERW DHALLDIMM XAKKEE MC FUCHEY🤠❤",
	"BAUU VANN RANDIKOO CHOKTAA MUJII DALITTE SALAA  HAHAHAHAH",
	"TEROO AMAA LAAI RATI BED MA LAGII VTENN KO SONGG MA NACHDAI UFRII DAI LYAAMM LYAMMM CHIKAAMM RDD KOO NSOO🤠🫀",
	"OLELEL MUJI NA RONARONA RANDIKO BAN VALU TERI AMA RAMDIKO XORO",
	"LADOLEES XORO MUJI TERI AMA CHIKI CHIKI CONDOM FUTERWWW JANMYAKO TALAII ASLAAA",
	"TERII AMA KO KALO PUTII MA UMMAH",
	"THOPPDAA PDDIIT SLALA  XORORO TEORO THOPPDA HERDAA MEROO UTHEEKO LADOO NI SUTXA🙀❤",
	 "TWROO AMAA NAII HO MEROO TURUU AND PURE LOVE KANNXXOO😘😘",
	"TEROO BAAINI LAI GULAABI PUTII SHOW GARNAA VANTA BAAU KO AGHADDII😻",
	"TEOROO AAMA NEPAALL TOP RANNDI HAINAA UNIVERSALL TOP RANDI KO KANXXOO🤠❤", 
	"TEROOO BAAINI RW TEORO AMAA LAAII MERAII SINGLE BED MA DUITAI LAII EUTAI THAU MA SUTAI SANGAII CHIKXU 🤠❤", 
	"TEROO AMAA LEEE MEROO LADO KO YAADD MA SADHAI RATI 1 BAJE FINGERINGG GARXA🤠❤",
	"RANNDI KO BACHAHHA SLALAA AMA KO KALO CHAURII PAREKO PUTII JASTAI THOPDA BOKER BAU KO AGHADI",
	"RANDI KO XORI TERO AAMA KO KALO PUTI MA MERO LAOOOOO",
		"THOPPDAA PDDIIT SLALA  XORORO TEORO THOPPDA HERDAA MEROO UTHEEKO LADOO NI SUTXA🙀❤",
	 "TWROO AMAA NAII HO MEROO TURUU AND PURE LOVE KANNXXOO😘😘",
	"TEROO BAAINI LAI GULAABI PUTII SHOW GARNAA VANTA BAAU KO AGHADDII😻",
	"TEOROO AAMA NEPAALL TOP RANNDI HAINAA UNIVERSALL TOP RANDI KO KANXXOO🤠❤",
	"TEROOO BAAINI RW TEORO AMAA LAAII MERAII SINGLE BED MA DUITAI LAII EUTAI THAU MA SUTAI SANGAII CHIKXU 🤠❤",
	 "TEROO AMAA LEEE MEROO LADO KO YAADD MA SADHAI RATI 1 BAJE FINGERINGG GARXA🤠❤",
	"RANNDI KO BACHAHHA SLALAA AMA KO KALO CHAURII PAREKO PUTII JASTAI THOPDA BOKER BAU KO AAGADI",
		"MADH3RXHOD KI AULAD BH3NXHODI XAL3 RANDI BHANGI",
	"MADHERXHOD T3RI MA KI KALI GAAND M3 LUND MARU",
	"RANDI KE AAULAD MADARCHOD TERE MAKI CHUT",
		"TERO AAMA LAI THAMEL MA LAGERA CHIKXU RANDI KO XORI",
		"TERO AAMA KO MUKH MA MERO LADO",
		"TERO DIDI SANGAI TERO AAMA NE CHIKXU RANDI KE AAULAD",
		"ONLINE GANGSTAR MACHIKNEE KOOL VAYES",
		"TERO AAMA LAI GANGBANG HANEKO MAILE HO RANDI KO XORA",
		"VALU KO BACCHA IJO MERO LADO CHUS",
		"tero bau ko aagadi tero aama chikne mai ho machikne",
	"RANNDI KO BACHAHHA SLALAA AMA KO KALO CHAURII PAREKO PUTII JASTAI THOPDA BOKER BAU KO AGHADI AUUXAS🤣🤣🤣",
		"TEROO AMAA LEEE MEROO LADO KO YAADD MA SADHAI RATI 1 BAJE FINGERINGG GARXA🤠❤",
	"PAILAA LEVEL MILA ANII AAIJAA JATHOO MADARCHOOD",
		"TROOO AMA LIAI CHIKER MAILE DEKO PAAISA LE TEROO GHAR CHHALXA XOROO SLA VIKARIIII🤠❤",
	"TEROOO AMA KO SABLEE PUTII CHIKER DULO NI YETROO BHAXA SLAAA TEORO PURA KHAANNDAN KOCHAREY NI AJHA DHERAI THAU BAKI RAHAANNXA🤠❤",
	"TEROOO BAAINI RW TEORO AMAA LAAII MERAII SINGLE BED MA DUITAI LAII EUTAI THAU MA SUTAI SANGAII CHIKXU 🤠❤",
	"ABA CHOOT KA TAPAKTA PANI NANKU MOCHI KI LAWARIS AULAD TERI MAA KA BHOSDA ",
		"PAILAA LEVEL MILA ANII AAIJAA JATHOO MADARCHOOD",
		"Tero tauko delivery garda tero ama ko puti bata niskinu garo vayera 2 ghanta tei rakhera nikaleko tesaile tah puti jasto ganauxas ",
		"Oi macchikne fuchhe radikonaso muji putimukhe tero aama ko kalo puti ma madishe ko lado xire paxi janmeko hos ta chikney hos gar radikoban ",
		"Ta dalit radikoban sano jhat ko muji teri aama ra bau voli bihan maros chikney Sukumbashi khola xeu ghar vako damai radikoban vada majnu luga dhunu khola jane randi",
		"Muji ximeki ko beu randikoxoro Futeko condom ko natijaaa Rape handa kheri galti le janmeko muji",
		"Tero aama ko puti ma mutera summing pool banauxu chikney Thamel ko maal ko xora Tero bau nepal vari xaOi macchikne fuchhe",
		"radikonaso muji putimukhe tero aama ko kalo puti ma madishe ko lado xire paxi janmeko hos ta chikney hos gar radikoban ",
		"Ta dalit radikoban sano jhat ko muji teri aama ra bau voli bihan maros chikney Sukumbashi khola xeu ghar vako damai radikoban vada majnu luga dhunu khola jane randi ",
	 "Tero aama ko puti ma mutera summing pool banauxu chikney ",
		"TERO AAMA KO MUKH MA XOLERA JANEMEKO TW RANDI XAKKA",
		"IJO LADO CHUS TERO AAMA LE JASARI",
		"RANDI KE AAULAD TERE MAKI CHUT MAI MERA LUND",
		"SAALE DALIT KAMI KO XORA TERO AAMA KO PUTI CHATTINE GARI CHIKXU",
		"TEROO AMAA KO KAALO PUTII PUTII HAINAA BLACKK HOLEE HO MCC JATI OTA LADO NI ATNEE🤠❤",
		"KAMI KO BAACHAA TERO AAMA KO KALO PUTI SHOW HAN",
		"KAMI KO XORA ONLINE GANGSTAR TERO AAMA KO PUTI CHIKXU",
		"AAFNO THOPDA LADO JASTO VAYERA PINTREST USE GARNE RAANDI KE AAULAD IJO MERP LADO DHOG",
		"PINTREST KE CHODA RANDI THAMEL KO MALL",
		"TERO AAMA LAI THAMEL MA LAGERA CHIKXU RANDI",
		"BIHARI DHOTI RANDI AAMA KO XORA TERE KHANDAN CHIKXU",
		"TERI BHEN KI CHUT ME ME LODA DAAL KAR RAAT BHAR JOR JOR SE CHODUNGA",
		"BHN KI CHUT CJOD CHOD KE GULABI SE PAAL KAR DUNGA",
		"TERA BAAP ABHI MERE LODE KO CHAAT CHAAT KAR KHUS HOTA HAI",
		" tera maa randi ko chodte chodte tere maa margya randi",
		".teri maa ka chuut ko faad k usme suwaar ka pesaab daalkar....saali k chuut pe laat se dulatti maar kar..tere paas tera land chatne k liye bhej denge",
		".gaand maar k land muh se nikal denge teri maa ka...chuut",
		"teri behan jo hamare pyaase land ki deewani hai uske to muh me hi lund daldunga",
		"gaand to saali ka fattt k kharbuja ho gya hai...behan ki laudi",
		"Teri maa ki chuut me apne land ka thuk fek k ittna gaand marunga ki duniya waale paresaan rah jayenge",
	"mero lado ne tw vanda seto xa randi ko xora",
	"Machikney rundi bhalu khatey lado Chus laudii",	
	"TERI BHANJI KE MUH ME LODA JHADU",
	"TERI MAA KI KAALI CHUTT ME BLACK LODA DALU",
	"TERI MAA KI KALI CHUT FADDU",
	"TERI AMMI KI PUSSY ME LODA JHADU",
	"TERI AMMI KI CHUT DJ BAJAR CHODU",
	"TERI FAMILY KI GAND MARU",
	"TERI AMMI KI CHUT ME PETROL DALU",
	"TERI AMMI KI CHUT BIKE PAR CHODU",
	"TERI AMMI KE DUDH KAATU",
	"TERI BEHAN KI PYASII JAWANI KI PYASS BUJHAU",
	"TERI BHANJI KI MST JAWANI CHODU",
	"TERA BAAP AYA MADER CHOD",
	"TERA KAAL HU ME BOXDE KEE",
	"TATA KA BACCHA MADER CHOD",
	"TEL LAGAKR CHODU TERI AMMI KI CHUT",
	"TERI BHATIJI KI CHUT KI PYASS BUJHAU",
	"TERI AMMI KI CHUT KI PYASS BUJHAU",
	"TERI AMMI MERE LODA KI DIWANI HAI",
	"TERI MOSI KI CHUT PAR LODA JHADU",
	"TERI AMMI KI MATAK MATAK CHUT CHODU",
	"TERI MOSI KI CHUT KA TINNA KAATU",
	"TERI MOSII KO KUTTA CHODE",
	"TERI MOSI KI CHUT ROOM ME L,EJKAR CHODU",
	"TERI GAND MERE LODE KI PYAASI",
	"TERI AMMI KI CHUT ME RAWAR WALA LODA DALU",
	"TERI BUA KI CHUT ME KHEERA DALU",
	"TERI AMMI KI CHUT ME 440 VOLTEGE CURRENT DALi",
	"TERI GAND CONDOM LAGAKAR CHODU",
	"tor puti chiking bahin k laudu radi muji xakki kt blow job dine nigga",
	"MERAAAAA LUNDDDDD JAAABBB TERIIIIIIII BEHNNN KIIII XHUTTTTT MEEEE JAYEGAAA KASMMM SSS AMARRR HOOO JAYEGIIIIIIII",
	"BETAA TERE BAAS KI BAAT NA HAI MERE SE FYT KAR SAKE APNI AMMI JAAN KO BEJ USKI GORI GAAD MARUGA",
	"TERII BEHN KO GODD ME LEKAR CHODU DOGI STEP TERI BEHN KI XHUTT. XHODNE ME USE KRUU.",
	"MEKOOOO APKIIIIIIIIII BEHNNNNN KIIIIIIII XHUTTTTTT XHODDNNIIIIII HHHH GAWARRRR",
	"BETA AUKAAT ME REHNA TERA BAAP HU TAMEEZ SE BAATT KARNA WARNA TERI BEHEN KI CHUTT SE PAANI KI JAGAH KHOON NIKLEGA",
	"MADH3RXHOD KI AULAD BH3NXHODI XAL3 RANDI BHANGI MADHERXHOD T3RI MA KI KALI GAAND M3 LUND ",
	"APKIIIIIIIII BEHNNNN KIIIIIIII GULABIIIII CHUTTTTT MAARUUU",
	"T3RI MA KI KALI CH00T T3RI MA K3 BH0SD3 M3 THPAD DUNGA SAL3 GHANDV3 K3 BADCH3 B3H3NCH0UD K3 DIN3 T3RI MA KI SADI CH00T",
	"AAUKATLESS DALIT KO XORA TERO AAMA SARKARI MAAL",
	"APKAAAA JIJUUUU AYUSHHHH HUUUUU BOXDEEE KKKKK BAAPPPPBOLLLLLL DEEEE MUNNNNAAAAA",
	"UFFF T3R1 B9J111 K9 PY9R 0R M3R9Y L0R3 K9 W9R J0 S1RF T3R1 B9J11 K1 PHUD1 M9 N1K9LT9 H91",
		"LADOOO LES TAT TC TAUKEE SALLAA XKKKAAA TEORO PUTI MA MERO NAM LEKHXU ABAA",
		"TEORO AMA KO PUTI MA DAHI HALERW LYAAMM LYAM CHIKAMAMMM BHNNTW",
		"TERII AMA KO KALO PUTII MA LYAMMMA LYAMMA CHKAMM MUJII THUKK LAII LAII MADRCHOOOD BESYYA AMA KO XORO",
		"TEORO AMAA LAAII KOPCHI MAA LAGERW CHIKAAMM RANNDDII MAKAA BAXHHA",
		"TERO AAMA LAAII MERO LADO MAA BASAII NEPAALL GHUMAUXXUU RANNDDI MAA KAA BXHHAA",
		"TEERII MAA KI CHUTT PAKAR K RODDD DALDUU BEHENCHODDD SALA NALAYKK BACHHA ANPADDD MUJIII",
	"TEORO AMAA LAAII KOPCHI MAA LAGERW CHIKAAMM RANNDDII MAKAA BAXHHA",
	"TERO AAMA LAAII MERO LADO MAA BASAII NEPAALL GHUMAUXXUU RANNDDI MAA KAA BXHHAA",
	"TEERII MAA KI CHUTT PAKAR K RODDD DALDUU BEHENCHODDD SALA NALAYKK BACHHA ANPADDD MUJIII",
];

let t = [];
let lastMessageIndex = -1; 
const spamIntervals = {};

const warData = readWarJson();
if (warData.uids) {
	t = warData.uids;
}

const permissions = ["61564362311773", "100093016749575"]; 

module.exports = {
	config: {
		name: "spam",
		aliases: [],
		version: "1.0",
		author: "Vex_kshitiz",
		countDown: 5,
		role: 0,
		shortDescription: "",
		longDescription: "spam a thread",
		category: "fun",
		guide: {
			vi: "",
			en: "{p}spam {tid} to start spamming, {p}spam off {tid} to stop spamming",
		},
	},

	onStart: async function ({ api, event, args }) {
		const userId = event.senderID.toString();
		if (!permissions.includes(userId)) {
			await api.sendMessage({
				body: "shut up gey",
				attachment: null,
				mentions: [],
			}, event.threadID, event.messageID);
			return;
		}

		const subCommand = args[0];
		const tid = args[1];

		if (subCommand === "off") {
			if (tid && spamIntervals[tid]) {
				clearInterval(spamIntervals[tid]);
				delete spamIntervals[tid];
				await api.sendMessage({
					body: `Spam stopped in: ${tid}`,
					attachment: null,
					mentions: [],
				}, event.threadID, event.messageID);
			} else {
				await api.sendMessage({
					body: "Please provide a valid thread ID.",
					attachment: null,
					mentions: [],
				}, event.threadID, event.messageID);
			}
		} else if (tid) {
			if (spamIntervals[tid]) {
				await api.sendMessage({
					body: `Already spamming in: ${tid}`,
					attachment: null,
					mentions: [],
				}, event.threadID, event.messageID);
				return;
			}

			spamIntervals[tid] = setInterval(async () => {
				lastMessageIndex = (lastMessageIndex + 1) % m.length;
				await api.sendMessage({
					body: m[lastMessageIndex],
					attachment: null,
					mentions: [],
				}, tid);
			}, 3000);

			await api.sendMessage({
				body: `Started spamming in ${tid}`,
				attachment: null,
				mentions: [],
			}, event.threadID, event.messageID);
		} else {
			await api.sendMessage({
				body: "Please provide a thread ID to spam.",
				attachment: null,
				mentions: [],
			}, event.threadID, event.messageID);
		}
	},
};
