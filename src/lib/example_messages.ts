import type { Msg } from './types';

export const example_messages: Msg[] = [
	{ role: 'user', text: 'When was Peter Schmeichel last professional soccer game?' },
	{
		role: 'assistant',
		tokens: [
			{
				token: 'Peter',
				logprob: 0,
				prob: 1,
				gini: 0.9999999124930071,
				opacity: {
					prob: 1,
					gini: 0.9999999124930071
				},
				top: [
					{
						token: 'Peter',
						logprob: 0,
						prob: 1
					},
					{
						token: ' Peter',
						logprob: -17.375,
						prob: 2.8453348089834e-8
					},
					{
						token: 'Pete',
						logprob: -18.5,
						prob: 9.237449661970594e-9
					},
					{
						token: 'Pedro',
						logprob: -19,
						prob: 5.602796437537268e-9
					},
					{
						token: 'Pet',
						logprob: -21.5,
						prob: 4.5990553786523166e-10
					}
				]
			},
			{
				token: ' Sch',
				logprob: 0,
				prob: 1,
				gini: 0.9999999931501908,
				opacity: {
					prob: 1,
					gini: 0.9999999931501908
				},
				top: [
					{
						token: ' Sch',
						logprob: 0,
						prob: 1
					},
					{
						token: 'Sch',
						logprob: -19.625,
						prob: 2.9989608248573072e-9
					},
					{
						token: ' Š',
						logprob: -21.875,
						prob: 3.160881454313692e-10
					},
					{
						token: ' Sh',
						logprob: -23.625,
						prob: 5.4927883509546835e-11
					},
					{
						token: ' Sche',
						logprob: -23.625,
						prob: 5.4927883509546835e-11
					}
				]
			},
			{
				token: 'me',
				logprob: 0,
				prob: 1,
				gini: 0.9999999963284258,
				opacity: {
					prob: 1,
					gini: 0.9999999931501908
				},
				top: [
					{
						token: 'me',
						logprob: 0,
						prob: 1
					},
					{
						token: 'ME',
						logprob: -20.75,
						prob: 9.736200313009565e-10
					},
					{
						token: '-me',
						logprob: -21.25,
						prob: 5.905303998944039e-10
					},
					{
						token: 'Me',
						logprob: -22.375,
						prob: 1.917171513758312e-10
					},
					{
						token: 'mie',
						logprob: -23.25,
						prob: 7.991959892953932e-11
					}
				]
			},
			{
				token: 'ichel',
				logprob: -6.704273118884885e-7,
				prob: 0.9999993295729128,
				gini: 0.9999988873793545,
				opacity: {
					prob: 1,
					gini: 0.9999999931501908
				},
				top: [
					{
						token: 'ichel',
						logprob: -6.704273118884885e-7,
						prob: 0.9999993295729128
					},
					{
						token: 'iche',
						logprob: -14.875000953674316,
						prob: 3.4663241069161144e-7
					},
					{
						token: 'ichael',
						logprob: -15.750000953674316,
						prob: 1.4449788680693535e-7
					},
					{
						token: 'ich',
						logprob: -16.625,
						prob: 6.023573837886479e-8
					},
					{
						token: 'ic',
						logprob: -19.125,
						prob: 4.944450501938644e-9
					}
				]
			},
			{
				token: ' played',
				logprob: -0.46621450781822205,
				prob: 0.6273726932648249,
				gini: 0.48704447421097946,
				opacity: {
					prob: 0.6273726932648249,
					gini: 0.48704447421097946
				},
				top: [
					{
						token: ' played',
						logprob: -0.46621450781822205,
						prob: 0.6273726932648249
					},
					{
						token: "'s",
						logprob: -1.2162145376205444,
						prob: 0.29634986756943693
					},
					{
						token: ',',
						logprob: -2.591214418411255,
						prob: 0.07492898966527768
					},
					{
						token: '’s',
						logprob: -6.841214656829834,
						prob: 0.0010688043803276565
					},
					{
						token: ' last',
						logprob: -8.216214179992676,
						prob: 0.00027023619637501643
					}
				]
			},
			{
				token: ' his',
				logprob: -0.0000012664456789934775,
				prob: 0.9999987335551229,
				gini: 0.9999976447097693,
				opacity: {
					prob: 0.9999987335551229,
					gini: 0.9999976447097693
				},
				top: [
					{
						token: ' his',
						logprob: -0.0000012664456789934775,
						prob: 0.9999987335551229
					},
					{
						token: ' in',
						logprob: -13.875000953674316,
						prob: 9.422445831379603e-7
					},
					{
						token: ' the',
						logprob: -15.375000953674316,
						prob: 2.1024318473456359e-7
					},
					{
						token: 'his',
						logprob: -17.625001907348633,
						prob: 2.2159447507533765e-8
					},
					{
						token: ' a',
						logprob: -19.625001907348633,
						prob: 2.9989551047989332e-9
					}
				]
			},
			{
				token: ' last',
				logprob: -0.00003547789674485102,
				prob: 0.9999645227325883,
				gini: 0.9999292562594169,
				opacity: {
					prob: 0.9999645227325883,
					gini: 0.9999292562594169
				},
				top: [
					{
						token: ' last',
						logprob: -0.00003547789674485102,
						prob: 0.9999645227325883
					},
					{
						token: ' final',
						logprob: -10.250035285949707,
						prob: 0.00003535625324942473
					},
					{
						token: '最后',
						logprob: -18.375036239624023,
						prob: 1.0467022466912503e-8
					},
					{
						token: 'last',
						logprob: -19.500036239624023,
						prob: 3.398144669778425e-9
					},
					{
						token: ' Last',
						logprob: -19.625036239624023,
						prob: 2.998852145613813e-9
					}
				]
			},
			{
				token: ' professional',
				logprob: -5.512236498361744e-7,
				prob: 0.999999448776502,
				gini: 0.9999988301567155,
				opacity: {
					prob: 0.999999448776502,
					gini: 0.9999988301567155
				},
				top: [
					{
						token: ' professional',
						logprob: -5.512236498361744e-7,
						prob: 0.999999448776502
					},
					{
						token: ' official',
						logprob: -15.000000953674316,
						prob: 3.059020287707785e-7
					},
					{
						token: ' competitive',
						logprob: -15.375000953674316,
						prob: 2.1024318473456359e-7
					},
					{
						token: ' Professional',
						logprob: -17.125,
						prob: 3.6534822137210456e-8
					},
					{
						token: 'professional',
						logprob: -17.25,
						prob: 3.2241867372567335e-8
					}
				]
			},
			{
				token: ' soccer',
				logprob: -0.0002787359117064625,
				prob: 0.9997213029315387,
				gini: 0.9994428049092359,
				opacity: {
					prob: 0.9997213029315387,
					gini: 0.9994428049092359
				},
				top: [
					{
						token: ' soccer',
						logprob: -0.0002787359117064625,
						prob: 0.9997213029315387
					},
					{
						token: ' football',
						logprob: -8.75027847290039,
						prob: 0.0001584172040744888
					},
					{
						token: ' game',
						logprob: -9.50027847290039,
						prob: 0.0000748309885835361
					},
					{
						token: ' match',
						logprob: -10.00027847290039,
						prob: 0.000045387288872520696
					},
					{
						token: ' Soccer',
						logprob: -17.87527847290039,
						prob: 1.7253022819631596e-8
					}
				]
			},
			{
				token: ' game',
				logprob: -0.0031777136027812958,
				prob: 0.9968273299853154,
				gini: 0.9936747292629038,
				opacity: {
					prob: 0.9968273299853154,
					gini: 0.9936747292629038
				},
				top: [
					{
						token: ' game',
						logprob: -0.0031777136027812958,
						prob: 0.9968273299853154
					},
					{
						token: ' match',
						logprob: -5.753177642822266,
						prob: 0.0031726831078774057
					},
					{
						token: 'game',
						logprob: -18.003177642822266,
						prob: 1.5181661119218092e-8
					},
					{
						token: " game's",
						logprob: -20.003177642822266,
						prob: 2.0546144075716506e-9
					},
					{
						token: ' games',
						logprob: -20.628177642822266,
						prob: 1.0997558428525005e-9
					}
				]
			},
			{
				token: ' on',
				logprob: -0.000058961017202818766,
				prob: 0.9999410407209638,
				gini: 0.9998822506654216,
				opacity: {
					prob: 0.9999410407209638,
					gini: 0.9998822506654216
				},
				top: [
					{
						token: ' on',
						logprob: -0.000058961017202818766,
						prob: 0.9999410407209638
					},
					{
						token: ' for',
						logprob: -9.750059127807617,
						prob: 0.00005829121699710653
					},
					{
						token: ' in',
						logprob: -14.375059127807617,
						prob: 5.714669830578664e-7
					},
					{
						token: ' On',
						logprob: -18.375059127807617,
						prob: 1.0466782898522254e-8
					},
					{
						token: ' with',
						logprob: -19.125059127807617,
						prob: 4.944158156063563e-9
					}
				]
			},
			{
				token: ' May',
				logprob: -0.014719624072313309,
				prob: 0.9853881800007733,
				gini: 0.9714799573087114,
				opacity: {
					prob: 0.9853881800007733,
					gini: 0.9714799573087114
				},
				top: [
					{
						token: ' May',
						logprob: -0.014719624072313309,
						prob: 0.9853881800007733
					},
					{
						token: ' April',
						logprob: -4.264719486236572,
						prob: 0.014055809428086869
					},
					{
						token: ' June',
						logprob: -8.38971996307373,
						prob: 0.00022719089129008817
					},
					{
						token: ' November',
						logprob: -9.26471996307373,
						prob: 0.0000947072537957466
					},
					{
						token: ' December',
						logprob: -9.38971996307373,
						prob: 0.00008357885812703954
					}
				]
			},
			{
				token: ' ',
				logprob: 0,
				prob: 1,
				gini: 0.9999999989795705,
				opacity: {
					prob: 1,
					gini: 0.9999999989795705
				},
				top: [
					{
						token: ' ',
						logprob: 0,
						prob: 1
					},
					{
						token: ',',
						logprob: -21.875,
						prob: 3.160881454313692e-10
					},
					{
						token: ' ',
						logprob: -22.75,
						prob: 1.3176514270095466e-10
					},
					{
						token: ' **',
						logprob: -23.75,
						prob: 4.8473687062702556e-11
					},
					{
						token: '16',
						logprob: -25,
						prob: 1.3887943864964021e-11
					}
				]
			},
			{
				token: '9',
				logprob: -4.254490852355957,
				prob: 0.01420031896425158,
				gini: 0.2822521834021831,
				opacity: {
					prob: 0.01420031896425158,
					gini: 0.2822521834021831
				},
				top: [
					{
						token: '24',
						logprob: -1.3794910907745361,
						prob: 0.2517066162898532
					},
					{
						token: '19',
						logprob: -1.5044910907745361,
						prob: 0.2221303092358447
					},
					{
						token: '11',
						logprob: -2.629491090774536,
						prob: 0.0721151529684902
					},
					{
						token: '21',
						logprob: -2.754491090774536,
						prob: 0.06364139912410689
					},
					{
						token: '14',
						logprob: -2.879491090774536,
						prob: 0.05616333760317432
					}
				]
			},
			{
				token: ',',
				logprob: 0,
				prob: 1,
				gini: 0.9999999851406649,
				opacity: {
					prob: 1,
					gini: 0.9999999851406649
				},
				top: [
					{
						token: ',',
						logprob: 0,
						prob: 1
					},
					{
						token: 'th',
						logprob: -18.75,
						prob: 7.194133030325383e-9
					},
					{
						token: ' and',
						logprob: -22.625,
						prob: 1.493094676197164e-10
					},
					{
						token: ' ',
						logprob: -23.75,
						prob: 4.8473687062702556e-11
					},
					{
						token: '.',
						logprob: -24,
						prob: 3.775134544279098e-11
					}
				]
			},
			{
				token: ' ',
				logprob: 0,
				prob: 1,
				gini: 0.9999999784757851,
				opacity: {
					prob: 1,
					gini: 0.9999999784757851
				},
				top: [
					{
						token: ' ',
						logprob: 0,
						prob: 1
					},
					{
						token: '199',
						logprob: -18.375,
						prob: 1.0467401794744656e-8
					},
					{
						token: '200',
						logprob: -22.5,
						prob: 1.6918979226151304e-10
					},
					{
						token: ' ',
						logprob: -23,
						prob: 1.026187963170189e-10
					},
					{
						token: ' **',
						logprob: -24.5,
						prob: 2.289734845645553e-11
					}
				]
			},
			{
				token: '200',
				logprob: -0.001086043776012957,
				prob: 0.9989145457560902,
				gini: 0.9978589228287786,
				opacity: {
					prob: 0.9989145457560902,
					gini: 0.9978589228287786
				},
				top: [
					{
						token: '200',
						logprob: -0.001086043776012957,
						prob: 0.9989145457560902
					},
					{
						token: '199',
						logprob: -7.001086235046387,
						prob: 0.0009108919851783931
					},
					{
						token: '２００',
						logprob: -8.751086235046387,
						prob: 0.00015828929232185378
					},
					{
						token: '২০০',
						logprob: -13.626086235046387,
						prob: 0.0000012085536607140204
					},
					{
						token: ' Sch',
						logprob: -13.688586235046387,
						prob: 0.0000011353310959857962
					}
				]
			},
			{
				token: '3',
				logprob: -0.00006182190554682165,
				prob: 0.9999381800053878,
				gini: 0.9998935113066705,
				opacity: {
					prob: 0.9999381800053878,
					gini: 0.9998935113066705
				},
				top: [
					{
						token: '3',
						logprob: -0.00006182190554682165,
						prob: 0.9999381800053878
					},
					{
						token: '4',
						logprob: -10.375061988830566,
						prob: 0.000031200950813217676
					},
					{
						token: '5',
						logprob: -11.625061988830566,
						prob: 0.000008939222074585712
					},
					{
						token: '1',
						logprob: -11.875061988830566,
						prob: 0.000006961873151736542
					},
					{
						token: '2',
						logprob: -12.000061988830566,
						prob: 0.0000061438314925943535
					}
				]
			},
			{
				token: '.',
				logprob: -0.023245826363563538,
				prob: 0.9770222764165042,
				gini: 0.9551004201532287,
				opacity: {
					prob: 0.9770222764165042,
					gini: 0.9551004201532287
				},
				top: [
					{
						token: '.',
						logprob: -0.023245826363563538,
						prob: 0.9770222764165042
					},
					{
						token: ',',
						logprob: -3.7732458114624023,
						prob: 0.022977361934812198
					},
					{
						token: ' while',
						logprob: -14.773245811462402,
						prob: 3.8376102398441343e-7
					},
					{
						token: ' for',
						logprob: -18.52324676513672,
						prob: 9.025185624415416e-9
					},
					{
						token: ';',
						logprob: -19.27324676513672,
						prob: 4.2631958212528725e-9
					}
				]
			},
			{
				token: ' The',
				logprob: -4.675937652587891,
				prob: 0.009316785133133804,
				gini: 0.9057566646003519,
				opacity: {
					prob: 0.009316785133133804,
					gini: 0.9057566646003519
				},
				top: [
					{
						token: ' He',
						logprob: -0.05093760043382645,
						prob: 0.9503379693593035
					},
					{
						token: ' This',
						logprob: -3.8009376525878906,
						prob: 0.02234980567507464
					},
					{
						token: ' At',
						logprob: -4.300937652587891,
						prob: 0.013555842380552179
					},
					{
						token: ' The',
						logprob: -4.675937652587891,
						prob: 0.009316785133133804
					},
					{
						token: ' It',
						logprob: -5.675937652587891,
						prob: 0.0034274537082916653
					}
				]
			},
			{
				token: ' match',
				logprob: -0.011071049608290195,
				prob: 0.9889900089263385,
				gini: 0.9782381723014815,
				opacity: {
					prob: 0.9889900089263385,
					gini: 0.9782381723014815
				},
				top: [
					{
						token: ' match',
						logprob: -0.011071049608290195,
						prob: 0.9889900089263385
					},
					{
						token: ' game',
						logprob: -4.51107120513916,
						prob: 0.010986684876750133
					},
					{
						token: ' former',
						logprob: -11.51107120513916,
						prob: 0.00001001855980033899
					},
					{
						token: ' final',
						logprob: -12.63607120513916,
						prob: 0.000003252550158557228
					},
					{
						token: ' legendary',
						logprob: -13.26107120513916,
						prob: 0.0000017409646441990102
					}
				]
			},
			{
				token: ' was',
				logprob: -0.014226616360247135,
				prob: 0.9858741037451271,
				gini: 0.9721486939952757,
				opacity: {
					prob: 0.9858741037451271,
					gini: 0.9721486939952757
				},
				top: [
					{
						token: ' was',
						logprob: -0.014226616360247135,
						prob: 0.9858741037451271
					},
					{
						token: ' took',
						logprob: -4.26422643661499,
						prob: 0.01406274134835632
					},
					{
						token: ',',
						logprob: -10.014226913452148,
						prob: 0.000044758601767261395
					},
					{
						token: ' occurred',
						logprob: -11.139226913452148,
						prob: 0.000014530990499251205
					},
					{
						token: ' featured',
						logprob: -13.014226913452148,
						prob: 0.000002228399566236639
					}
				]
			},
			{
				token: ' for',
				logprob: -0.12439893186092377,
				prob: 0.8830275028030407,
				gini: 0.8333412126005451,
				opacity: {
					prob: 0.8830275028030407,
					gini: 0.8333412126005451
				},
				top: [
					{
						token: ' for',
						logprob: -0.12439893186092377,
						prob: 0.8830275028030407
					},
					{
						token: ' part',
						logprob: -3.249398946762085,
						prob: 0.0387975202001723
					},
					{
						token: ' between',
						logprob: -3.999398946762085,
						prob: 0.018326650871855272
					},
					{
						token: ' a',
						logprob: -4.249398708343506,
						prob: 0.014272813452980627
					},
					{
						token: ' with',
						logprob: -4.249398708343506,
						prob: 0.014272813452980627
					}
				]
			},
			{
				token: ' Manchester',
				logprob: -0.006500666029751301,
				prob: 0.9935204175890707,
				gini: 0.9884524415254285,
				opacity: {
					prob: 0.9935204175890707,
					gini: 0.9884524415254285
				},
				top: [
					{
						token: ' Manchester',
						logprob: -0.006500666029751301,
						prob: 0.9935204175890707
					},
					{
						token: ' Aston',
						logprob: -5.631500720977783,
						prob: 0.0035831939160662378
					},
					{
						token: ' his',
						logprob: -7.131500720977783,
						prob: 0.0007995186323347391
					},
					{
						token: ' the',
						logprob: -7.256500720977783,
						prob: 0.0007055727165940792
					},
					{
						token: ' Br',
						logprob: -7.256500720977783,
						prob: 0.0007055727165940792
					}
				]
			},
			{
				token: ' City',
				logprob: -0.0030376052018254995,
				prob: 0.9969670036530474,
				gini: 0.9939515909728835,
				opacity: {
					prob: 0.9969670036530474,
					gini: 0.9939515909728835
				},
				top: [
					{
						token: ' City',
						logprob: -0.0030376052018254995,
						prob: 0.9969670036530474
					},
					{
						token: " City's",
						logprob: -5.878037452697754,
						prob: 0.0028002755590475666
					},
					{
						token: ' United',
						logprob: -8.378037452697754,
						prob: 0.00022986061541095695
					},
					{
						token: 'City',
						logprob: -12.878037452697754,
						prob: 0.000002553520780878567
					},
					{
						token: ' CITY',
						logprob: -16.62803840637207,
						prob: 6.005299549171333e-8
					}
				]
			},
			{
				token: ' against',
				logprob: -0.12790757417678833,
				prob: 0.8799347040757208,
				gini: 0.7815555777938227,
				opacity: {
					prob: 0.8799347040757208,
					gini: 0.7815555777938227
				},
				top: [
					{
						token: ' against',
						logprob: -0.12790757417678833,
						prob: 0.8799347040757208
					},
					{
						token: ' in',
						logprob: -2.7529075145721436,
						prob: 0.06374225996858582
					},
					{
						token: ',',
						logprob: -2.8779075145721436,
						prob: 0.05625234698601904
					},
					{
						token: ' during',
						logprob: -10.252907752990723,
						prob: 0.00003525483930111506
					},
					{
						token: ' and',
						logprob: -11.752907752990723,
						prob: 0.000007866417939264962
					}
				]
			},
			{
				token: ' Arkansas',
				logprob: -9999,
				prob: 0,
				gini: 0.2563376343254772,
				opacity: {
					prob: 0,
					gini: 0.2563376343254772
				},
				top: [
					{
						token: ' the',
						logprob: -1.6808637380599976,
						prob: 0.1862130672444406
					},
					{
						token: ' Blackburn',
						logprob: -2.180863857269287,
						prob: 0.11294392105891814
					},
					{
						token: ' W',
						logprob: -2.618363857269287,
						prob: 0.07292207620067866
					},
					{
						token: ' Q',
						logprob: -2.680863857269287,
						prob: 0.06850395095039721
					},
					{
						token: ' Queens',
						logprob: -3.243363857269287,
						prob: 0.03903237467774592
					}
				]
			},
			{
				token: ' State',
				logprob: -2.513702869415283,
				prob: 0.08096787002057512,
				gini: 0.33340894288715517,
				opacity: {
					prob: 0.08096787002057512,
					gini: 0.33340894288715517
				},
				top: [
					{
						token: ',',
						logprob: -1.1387027502059937,
						prob: 0.3202341761977218
					},
					{
						token: ' in',
						logprob: -1.1387027502059937,
						prob: 0.3202341761977218
					},
					{
						token: ' State',
						logprob: -2.513702869415283,
						prob: 0.08096787002057512
					},
					{
						token: '.',
						logprob: -3.138702869415283,
						prob: 0.04333897777135296
					},
					{
						token: ' at',
						logprob: -3.263702869415283,
						prob: 0.03824651364440162
					}
				]
			},
			{
				token: ' University',
				logprob: -0.6891281008720398,
				prob: 0.5020135835097941,
				gini: 0.3718195224729922,
				opacity: {
					prob: 0.5020135835097941,
					gini: 0.3718195224729922
				},
				top: [
					{
						token: ' University',
						logprob: -0.6891281008720398,
						prob: 0.5020135835097941
					},
					{
						token: ' in',
						logprob: -1.3141281604766846,
						prob: 0.2687084918291151
					},
					{
						token: ',',
						logprob: -1.9391281604766846,
						prob: 0.14382929119163557
					},
					{
						token: ' at',
						logprob: -3.5641281604766846,
						prob: 0.028321666671976792
					},
					{
						token: '.',
						logprob: -3.8141281604766846,
						prob: 0.022056936182022834
					}
				]
			},
			{
				token: ',',
				logprob: -1.1143975257873535,
				prob: 0.32811289892356493,
				gini: 0.33208851920918525,
				opacity: {
					prob: 0.32811289892356493,
					gini: 0.33208851920918525
				},
				top: [
					{
						token: ' in',
						logprob: -0.8643975853919983,
						prob: 0.42130527664920114
					},
					{
						token: ',',
						logprob: -1.1143975257873535,
						prob: 0.32811289892356493
					},
					{
						token: '.',
						logprob: -1.9893975257873535,
						prob: 0.13677780572784756
					},
					{
						token: ' during',
						logprob: -3.1143975257873535,
						prob: 0.044405252109406726
					},
					{
						token: ' at',
						logprob: -3.4893975257873535,
						prob: 0.03051925369680545
					}
				]
			},
			{
				token: ' marking',
				logprob: -2.653937816619873,
				prob: 0.0703735485940991,
				gini: 0.2534820091006041,
				opacity: {
					prob: 0.0703735485940991,
					gini: 0.2534820091006041
				},
				top: [
					{
						token: ' and',
						logprob: -1.2789379358291626,
						prob: 0.27833275077398995
					},
					{
						token: ' which',
						logprob: -1.6539379358291626,
						prob: 0.19129511554336298
					},
					{
						token: ' where',
						logprob: -1.9039379358291626,
						prob: 0.14898078578290597
					},
					{
						token: ' in',
						logprob: -2.653937816619873,
						prob: 0.0703735485940991
					},
					{
						token: ' during',
						logprob: -2.653937816619873,
						prob: 0.0703735485940991
					}
				]
			},
			{
				token: ' the',
				logprob: -0.004725718405097723,
				prob: 0.9952854302334352,
				gini: 0.9906166982422032,
				opacity: {
					prob: 0.9952854302334352,
					gini: 0.9906166982422032
				},
				top: [
					{
						token: ' the',
						logprob: -0.004725718405097723,
						prob: 0.9952854302334352
					},
					{
						token: ' his',
						logprob: -5.379725933074951,
						prob: 0.004609084954649014
					},
					{
						token: ' an',
						logprob: -9.379725456237793,
						prob: 0.00008441837589065796
					},
					{
						token: ' a',
						logprob: -11.254725456237793,
						prob: 0.000012945977235814558
					},
					{
						token: ' Sch',
						logprob: -11.879725456237793,
						prob: 0.000006929482268816429
					}
				]
			},
			{
				token: ' end',
				logprob: -0.02766708843410015,
				prob: 0.9727121400260368,
				gini: 0.9470090928540682,
				opacity: {
					prob: 0.9727121400260368,
					gini: 0.9470090928540682
				},
				top: [
					{
						token: ' end',
						logprob: -0.02766708843410015,
						prob: 0.9727121400260368
					},
					{
						token: ' conclusion',
						logprob: -3.6526670455932617,
						prob: 0.025921901610324476
					},
					{
						token: ' final',
						logprob: -7.027667045593262,
						prob: 0.0008869986961654492
					},
					{
						token: ' culmination',
						logprob: -7.902667045593262,
						prob: 0.00036975606793573283
					},
					{
						token: ' finale',
						logprob: -10.777667045593262,
						prob: 0.000020860209911030476
					}
				]
			},
			{
				token: ' of',
				logprob: -1.9361264946837764e-7,
				prob: 0.9999998063873693,
				gini: 0.9999998104346157,
				opacity: {
					prob: 0.9999998063873693,
					gini: 0.9999998104346157
				},
				top: [
					{
						token: ' of',
						logprob: -1.9361264946837764e-7,
						prob: 0.9999998063873693
					},
					{
						token: ' to',
						logprob: -16.25,
						prob: 8.764248219443636e-8
					},
					{
						token: ' his',
						logprob: -19.125,
						prob: 4.944450501938644e-9
					},
					{
						token: ' point',
						logprob: -20.25,
						prob: 1.6052280551856116e-9
					},
					{
						token: ' for',
						logprob: -21.25,
						prob: 5.905303998944039e-10
					}
				]
			},
			{
				token: ' his',
				logprob: -0.013463130220770836,
				prob: 0.9866270923702172,
				gini: 0.9735615491092249,
				opacity: {
					prob: 0.9866270923702172,
					gini: 0.9735615491092249
				},
				top: [
					{
						token: ' his',
						logprob: -0.013463130220770836,
						prob: 0.9866270923702172
					},
					{
						token: ' a',
						logprob: -4.513463020324707,
						prob: 0.01096043815818576
					},
					{
						token: ' Sch',
						logprob: -6.638463020324707,
						prob: 0.0013090376627359428
					},
					{
						token: ' an',
						logprob: -7.013463020324707,
						prob: 0.000899687551132006
					},
					{
						token: ' the',
						logprob: -8.513463020324707,
						prob: 0.00020074742736763315
					}
				]
			},
			{
				token: ' playing',
				logprob: -0.8918713331222534,
				prob: 0.40988799762722317,
				gini: 0.40668954624588305,
				opacity: {
					prob: 0.40988799762722317,
					gini: 0.40668954624588305
				},
				top: [
					{
						token: ' illustri',
						logprob: -0.7668713331222534,
						prob: 0.4644639504419469
					},
					{
						token: ' playing',
						logprob: -0.8918713331222534,
						prob: 0.40988799762722317
					},
					{
						token: ' career',
						logprob: -3.141871452331543,
						prob: 0.04320187195705984
					},
					{
						token: ' professional',
						logprob: -3.266871452331543,
						prob: 0.0381255181879616
					},
					{
						token: ' distinguished',
						logprob: -3.891871452331543,
						prob: 0.02040711932831507
					}
				]
			},
			{
				token: ' career',
				logprob: -0.0000010280383548888494,
				prob: 0.9999989719621736,
				gini: 0.9999983952261634,
				opacity: {
					prob: 0.9999989719621736,
					gini: 0.9999983952261634
				},
				top: [
					{
						token: ' career',
						logprob: -0.0000010280383548888494,
						prob: 0.9999989719621736
					},
					{
						token: ' days',
						logprob: -14.250000953674316,
						prob: 6.47594599989589e-7
					},
					{
						token: ' Career',
						logprob: -16.625001907348633,
						prob: 6.023562348842112e-8
					},
					{
						token: ' professional',
						logprob: -16.750001907348633,
						prob: 5.315775115378353e-8
					},
					{
						token: ' careers',
						logprob: -17.000001907348633,
						prob: 4.139929822488149e-8
					}
				]
			},
			{
				token: '.',
				logprob: -0.020734688267111778,
				prob: 0.9794787973166406,
				gini: 0.9621847300108932,
				opacity: {
					prob: 0.9794787973166406,
					gini: 0.9621847300108932
				},
				top: [
					{
						token: '.',
						logprob: -0.020734688267111778,
						prob: 0.9794787973166406
					},
					{
						token: ' after',
						logprob: -4.270734786987305,
						prob: 0.013971513294559278
					},
					{
						token: ' before',
						logprob: -5.895734786987305,
						prob: 0.0027511540879693354
					},
					{
						token: ' in',
						logprob: -6.645734786987305,
						prob: 0.0012995531725934254
					},
					{
						token: ' as',
						logprob: -6.770734786987305,
						prob: 0.0011468516495576821
					}
				]
			},
			{
				token: ' Sch',
				logprob: -0.7045541405677795,
				prob: 0.4943289263438928,
				gini: 0.3796993429416022,
				opacity: {
					prob: 0.4943289263438928,
					gini: 0.3796993429416022
				},
				top: [
					{
						token: ' Sch',
						logprob: -0.7045541405677795,
						prob: 0.4943289263438928
					},
					{
						token: ' After',
						logprob: -1.0795540809631348,
						prob: 0.3397469915229079
					},
					{
						token: '<|end|>',
						logprob: -2.2045540809631348,
						prob: 0.11029969907548837
					},
					{
						token: ' He',
						logprob: -3.2045540809631348,
						prob: 0.04057699165726891
					},
					{
						token: ' Following',
						logprob: -4.954554080963135,
						prob: 0.007051223853639432
					}
				]
			},
			{
				token: 'me',
				logprob: 0,
				prob: 1,
				gini: 0.9999999971797231,
				opacity: {
					prob: 0.4943289263438928,
					gini: 0.3796993429416022
				},
				top: [
					{
						token: 'me',
						logprob: 0,
						prob: 1
					},
					{
						token: '-me',
						logprob: -21.125,
						prob: 6.691586091292783e-10
					},
					{
						token: 'ME',
						logprob: -21.5,
						prob: 4.5990553786523166e-10
					},
					{
						token: ' me',
						logprob: -22.625,
						prob: 1.493094676197164e-10
					},
					{
						token: 'mie',
						logprob: -22.75,
						prob: 1.3176514270095466e-10
					}
				]
			},
			{
				token: 'ichel',
				logprob: -6.704273118884885e-7,
				prob: 0.9999993295729128,
				gini: 0.9999988528084466,
				opacity: {
					prob: 0.4943289263438928,
					gini: 0.3796993429416022
				},
				top: [
					{
						token: 'ichel',
						logprob: -6.704273118884885e-7,
						prob: 0.9999993295729128
					},
					{
						token: 'ichael',
						logprob: -14.500000953674316,
						prob: 5.043471815847051e-7
					},
					{
						token: 'iche',
						logprob: -16.625,
						prob: 6.023573837886479e-8
					},
					{
						token: 'ich',
						logprob: -18.75,
						prob: 7.194133030325383e-9
					},
					{
						token: ' Michel',
						logprob: -20.125,
						prob: 1.8189616875530459e-9
					}
				]
			},
			{
				token: ',',
				logprob: -2.67633056640625,
				prob: 0.0688152042531594,
				gini: 0.7142200912968599,
				opacity: {
					prob: 0.0688152042531594,
					gini: 0.7142200912968599
				},
				top: [
					{
						token: ' is',
						logprob: -0.17633056640625,
						prob: 0.8383408102186904
					},
					{
						token: ',',
						logprob: -2.67633056640625,
						prob: 0.0688152042531594
					},
					{
						token: ' had',
						logprob: -2.67633056640625,
						prob: 0.0688152042531594
					},
					{
						token: ' was',
						logprob: -4.30133056640625,
						prob: 0.013550517149008397
					},
					{
						token: ' retired',
						logprob: -4.67633056640625,
						prob: 0.009313125158586682
					}
				]
			},
			{
				token: ' the',
				logprob: -2.0061771869659424,
				prob: 0.13450186861802377,
				gini: 0.6466710101626566,
				opacity: {
					prob: 0.13450186861802377,
					gini: 0.6466710101626566
				},
				top: [
					{
						token: ' a',
						logprob: -0.2561771273612976,
						prob: 0.774004859211334
					},
					{
						token: ' the',
						logprob: -2.0061771869659424,
						prob: 0.13450186861802377
					},
					{
						token: ' renowned',
						logprob: -3.3811771869659424,
						prob: 0.034007398096364244
					},
					{
						token: ' widely',
						logprob: -3.7561771869659424,
						prob: 0.023372920111207663
					},
					{
						token: ' who',
						logprob: -4.381176948547363,
						prob: 0.012510625590150471
					}
				]
			},
			{
				token: ' legendary',
				logprob: -0.15692931413650513,
				prob: 0.8547644764474263,
				gini: 0.755034716640653,
				opacity: {
					prob: 0.8547644764474263,
					gini: 0.755034716640653
				},
				top: [
					{
						token: ' legendary',
						logprob: -0.15692931413650513,
						prob: 0.8547644764474263
					},
					{
						token: ' renowned',
						logprob: -2.1569292545318604,
						prob: 0.11567979941566053
					},
					{
						token: ' former',
						logprob: -4.4069294929504395,
						prob: 0.012192558248949867
					},
					{
						token: ' famous',
						logprob: -5.2819294929504395,
						prob: 0.005082614456705099
					},
					{
						token: ' iconic',
						logprob: -5.2819294929504395,
						prob: 0.005082614456705099
					}
				]
			},
			{
				token: ' goalkeeper',
				logprob: -2.9303171634674072,
				prob: 0.05338010524082096,
				gini: 0.8981334081856157,
				opacity: {
					prob: 0.05338010524082096,
					gini: 0.8981334081856157
				},
				top: [
					{
						token: ' Danish',
						logprob: -0.055317092686891556,
						prob: 0.9461850720132737
					},
					{
						token: ' goalkeeper',
						logprob: -2.9303171634674072,
						prob: 0.05338010524082096
					},
					{
						token: ' former',
						logprob: -8.055316925048828,
						prob: 0.00031740978394965725
					},
					{
						token: ' Denmark',
						logprob: -9.180316925048828,
						prob: 0.00010304786952293695
					},
					{
						token: ' Dane',
						logprob: -12.305316925048828,
						prob: 0.000004527607403262829
					}
				]
			},
			{
				token: ',',
				logprob: -0.06914267688989639,
				prob: 0.9331935254295025,
				gini: 0.8777246611489297,
				opacity: {
					prob: 0.9331935254295025,
					gini: 0.8777246611489297
				},
				top: [
					{
						token: ',',
						logprob: -0.06914267688989639,
						prob: 0.9331935254295025
					},
					{
						token: ' known',
						logprob: -2.8191425800323486,
						prob: 0.05965707195089279
					},
					{
						token: ' best',
						logprob: -5.694142818450928,
						prob: 0.0033656208911418037
					},
					{
						token: ' from',
						logprob: -6.694142818450928,
						prob: 0.0012381427326281784
					},
					{
						token: ' and',
						logprob: -7.319142818450928,
						prob: 0.000662730047776965
					}
				]
			},
			{
				token: ' is',
				logprob: -0.2360798865556717,
				prob: 0.7897175835950947,
				gini: 0.667188508511869,
				opacity: {
					prob: 0.7897175835950947,
					gini: 0.667188508511869
				},
				top: [
					{
						token: ' is',
						logprob: -0.2360798865556717,
						prob: 0.7897175835950947
					},
					{
						token: ' had',
						logprob: -1.6110799312591553,
						prob: 0.19967186571005663
					},
					{
						token: ' previously',
						logprob: -5.861079692840576,
						prob: 0.0028481668765903546
					},
					{
						token: ' was',
						logprob: -5.986079692840576,
						prob: 0.0025134984466350296
					},
					{
						token: ' retired',
						logprob: -5.986079692840576,
						prob: 0.0025134984466350296
					}
				]
			},
			{
				token: ' widely',
				logprob: -3.0935819149017334,
				prob: 0.045339261825515405,
				gini: 0.673246610064987,
				opacity: {
					prob: 0.045339261825515405,
					gini: 0.673246610064987
				},
				top: [
					{
						token: ' best',
						logprob: -0.21858200430870056,
						prob: 0.8036575733586663
					},
					{
						token: ' well',
						logprob: -1.968582034111023,
						prob: 0.13965474154431512
					},
					{
						token: ' widely',
						logprob: -3.0935819149017334,
						prob: 0.045339261825515405
					},
					{
						token: ' known',
						logprob: -5.3435821533203125,
						prob: 0.004778721899280441
					},
					{
						token: ' renowned',
						logprob: -6.0935821533203125,
						prob: 0.002257308390071096
					}
				]
			},
			{
				token: ' known',
				logprob: -0.1941717118024826,
				prob: 0.823516484627264,
				gini: 0.6936212623128629,
				opacity: {
					prob: 0.823516484627264,
					gini: 0.6936212623128629
				},
				top: [
					{
						token: ' known',
						logprob: -0.1941717118024826,
						prob: 0.823516484627264
					},
					{
						token: ' recognized',
						logprob: -2.569171667098999,
						prob: 0.07659896859840684
					},
					{
						token: ' regarded',
						logprob: -2.944171667098999,
						prob: 0.05264564988413136
					},
					{
						token: ' remembered',
						logprob: -3.319171667098999,
						prob: 0.03618279074034667
					},
					{
						token: ' celebrated',
						logprob: -4.944171905517578,
						prob: 0.007124812239556651
					}
				]
			},
			{
				token: ' for',
				logprob: -1.9361264946837764e-7,
				prob: 0.9999998063873693,
				gini: 0.9999997910899203,
				opacity: {
					prob: 0.9999998063873693,
					gini: 0.9999997910899203
				},
				top: [
					{
						token: ' for',
						logprob: -1.9361264946837764e-7,
						prob: 0.9999998063873693
					},
					{
						token: ' and',
						logprob: -16.875,
						prob: 4.691164021834418e-8
					},
					{
						token: ' primarily',
						logprob: -17.25,
						prob: 3.2241867372567335e-8
					},
					{
						token: ' not',
						logprob: -18.125,
						prob: 1.3440409951135022e-8
					},
					{
						token: ' best',
						logprob: -18.25,
						prob: 1.186112015134383e-8
					}
				]
			},
			{
				token: ' his',
				logprob: -0.0000012664456789934775,
				prob: 0.9999987335551229,
				gini: 0.9999978667567982,
				opacity: {
					prob: 0.9999987335551229,
					gini: 0.9999978667567982
				},
				top: [
					{
						token: ' his',
						logprob: -0.0000012664456789934775,
						prob: 0.9999987335551229
					},
					{
						token: ' the',
						logprob: -14.250000953674316,
						prob: 6.47594599989589e-7
					},
					{
						token: 'his',
						logprob: -15.250000953674316,
						prob: 2.3823673954981372e-7
					},
					{
						token: ' being',
						logprob: -16.000001907348633,
						prob: 1.1253496007565217e-7
					},
					{
						token: ' a',
						logprob: -16.500001907348633,
						prob: 6.825590357542018e-8
					}
				]
			},
			{
				token: ' time',
				logprob: -0.003530105808749795,
				prob: 0.9964761176894046,
				gini: 0.9936762039530519,
				opacity: {
					prob: 0.9964761176894046,
					gini: 0.9936762039530519
				},
				top: [
					{
						token: ' time',
						logprob: -0.003530105808749795,
						prob: 0.9964761176894046
					},
					{
						token: ' successful',
						logprob: -5.878530025482178,
						prob: 0.002798896559175078
					},
					{
						token: ' remarkable',
						logprob: -8.878530502319336,
						prob: 0.0001393487878995329
					},
					{
						token: ' impressive',
						logprob: -9.003530502319336,
						prob: 0.00012297487370025554
					},
					{
						token: ' tenure',
						logprob: -9.128530502319336,
						prob: 0.00010852494513620733
					}
				]
			},
			{
				token: ' at',
				logprob: -0.026527050882577896,
				prob: 0.9738217007427561,
				gini: 0.9490031039944695,
				opacity: {
					prob: 0.9738217007427561,
					gini: 0.9490031039944695
				},
				top: [
					{
						token: ' at',
						logprob: -0.026527050882577896,
						prob: 0.9738217007427561
					},
					{
						token: ' with',
						logprob: -3.651527166366577,
						prob: 0.025951466294369663
					},
					{
						token: ' spent',
						logprob: -8.401527404785156,
						prob: 0.0002245241229222161
					},
					{
						token: ' playing',
						logprob: -13.401527404785156,
						prob: 0.0000015128316402660426
					},
					{
						token: ' in',
						logprob: -14.901527404785156,
						prob: 3.375583661701738e-7
					}
				]
			},
			{
				token: ' Manchester',
				logprob: -0.008645767346024513,
				prob: 0.9913914998220522,
				gini: 0.9829492629932942,
				opacity: {
					prob: 0.9913914998220522,
					gini: 0.9829492629932942
				},
				top: [
					{
						token: ' Manchester',
						logprob: -0.008645767346024513,
						prob: 0.9913914998220522
					},
					{
						token: ' clubs',
						logprob: -4.758645534515381,
						prob: 0.008577219080464228
					},
					{
						token: 'Manchester',
						logprob: -11.258646011352539,
						prob: 0.0000128953211833552
					},
					{
						token: ' both',
						logprob: -12.258646011352539,
						prob: 0.0000047439235506589735
					},
					{
						token: ' teams',
						logprob: -12.383646011352539,
						prob: 0.00000418649783955466
					}
				]
			},
			{
				token: ' United',
				logprob: 0,
				prob: 1,
				gini: 0.999999834521517,
				opacity: {
					prob: 1,
					gini: 0.999999834521517
				},
				top: [
					{
						token: ' United',
						logprob: 0,
						prob: 1
					},
					{
						token: 'United',
						logprob: -16.875,
						prob: 4.691164021834418e-8
					},
					{
						token: ' united',
						logprob: -17.25,
						prob: 3.2241867372567335e-8
					},
					{
						token: ' U',
						logprob: -19.875,
						prob: 2.335593038799337e-9
					},
					{
						token: ' Manchester',
						logprob: -20.5,
						prob: 1.2501528663867426e-9
					}
				]
			},
			{
				token: ',',
				logprob: -0.2606762945652008,
				prob: 0.7705303040964591,
				gini: 0.6439310709854145,
				opacity: {
					prob: 0.7705303040964591,
					gini: 0.6439310709854145
				},
				top: [
					{
						token: ',',
						logprob: -0.2606762945652008,
						prob: 0.7705303040964591
					},
					{
						token: ' and',
						logprob: -1.5106762647628784,
						prob: 0.220760634828956
					},
					{
						token: ' as',
						logprob: -5.385676383972168,
						prob: 0.004581740258266566
					},
					{
						token: '.',
						logprob: -6.385676383972168,
						prob: 0.0016855280458038043
					},
					{
						token: ' but',
						logprob: -6.635676383972168,
						prob: 0.0013126905619608175
					}
				]
			},
			{
				token: ' where',
				logprob: -0.041176408529281616,
				prob: 0.9596598228366715,
				gini: 0.9226545082243036,
				opacity: {
					prob: 0.9596598228366715,
					gini: 0.9226545082243036
				},
				top: [
					{
						token: ' where',
						logprob: -0.041176408529281616,
						prob: 0.9596598228366715
					},
					{
						token: ' but',
						logprob: -3.9161763191223145,
						prob: 0.019917105987695076
					},
					{
						token: ' as',
						logprob: -4.4161763191223145,
						prob: 0.012080335434283137
					},
					{
						token: ' among',
						logprob: -4.9161763191223145,
						prob: 0.007327093820505653
					},
					{
						token: ' and',
						logprob: -7.7911763191223145,
						prob: 0.0004133663471349118
					}
				]
			},
			{
				token: ' he',
				logprob: -1.9361264946837764e-7,
				prob: 0.9999998063873693,
				gini: 0.9999997908308308,
				opacity: {
					prob: 0.9999998063873693,
					gini: 0.9999997908308308
				},
				top: [
					{
						token: ' he',
						logprob: -1.9361264946837764e-7,
						prob: 0.9999998063873693
					},
					{
						token: ' his',
						logprob: -16.5,
						prob: 6.82560337633487e-8
					},
					{
						token: ' she',
						logprob: -18,
						prob: 1.522997974471263e-8
					},
					{
						token: " he'd",
						logprob: -18.25,
						prob: 1.186112015134383e-8
					},
					{
						token: 'he',
						logprob: -18.5,
						prob: 9.237449661970594e-9
					}
				]
			},
			{
				token: ' won',
				logprob: -0.9816250801086426,
				prob: 0.3747016835585548,
				gini: 0.3915703879193648,
				opacity: {
					prob: 0.3747016835585548,
					gini: 0.3915703879193648
				},
				top: [
					{
						token: ' achieved',
						logprob: -0.7316250801086426,
						prob: 0.48112648536487157
					},
					{
						token: ' won',
						logprob: -0.9816250801086426,
						prob: 0.3747016835585548
					},
					{
						token: ' enjoyed',
						logprob: -2.8566250801086426,
						prob: 0.05746236425886105
					},
					{
						token: ' had',
						logprob: -2.9816250801086426,
						prob: 0.05071035847363264
					},
					{
						token: ' was',
						logprob: -3.9816250801086426,
						prob: 0.01865529833688349
					}
				]
			},
			{
				token: ' numerous',
				logprob: -0.03447560966014862,
				prob: 0.9661119031967829,
				gini: 0.9342807773076689,
				opacity: {
					prob: 0.9661119031967829,
					gini: 0.9342807773076689
				},
				top: [
					{
						token: ' numerous',
						logprob: -0.03447560966014862,
						prob: 0.9661119031967829
					},
					{
						token: ' multiple',
						logprob: -3.534475564956665,
						prob: 0.02917405287388087
					},
					{
						token: ' several',
						logprob: -5.409475803375244,
						prob: 0.004473984844524954
					},
					{
						token: ' many',
						logprob: -8.534475326538086,
						prob: 0.00019657326887944021
					},
					{
						token: ' various',
						logprob: -10.659475326538086,
						prob: 0.00002347732898416353
					}
				]
			},
			{
				token: ' titles',
				logprob: -0.09535177052021027,
				prob: 0.9090531001354513,
				gini: 0.8340423533145792,
				opacity: {
					prob: 0.9090531001354513,
					gini: 0.8340423533145792
				},
				top: [
					{
						token: ' titles',
						logprob: -0.09535177052021027,
						prob: 0.9090531001354513
					},
					{
						token: ' trophies',
						logprob: -2.4703516960144043,
						prob: 0.08455511607431597
					},
					{
						token: ' accolades',
						logprob: -5.970351696014404,
						prob: 0.0025533432604147657
					},
					{
						token: ' honors',
						logprob: -6.220351696014404,
						prob: 0.0019885457306611136
					},
					{
						token: ' domestic',
						logprob: -6.470351696014404,
						prob: 0.001548680972212174
					}
				]
			},
			{
				token: ',',
				logprob: -0.14911966025829315,
				prob: 0.8614660254841081,
				gini: 0.7484265905301806,
				opacity: {
					prob: 0.8614660254841081,
					gini: 0.7484265905301806
				},
				top: [
					{
						token: ',',
						logprob: -0.14911966025829315,
						prob: 0.8614660254841081
					},
					{
						token: '.',
						logprob: -3.0241196155548096,
						prob: 0.04860058964409167
					},
					{
						token: ' and',
						logprob: -3.1491196155548096,
						prob: 0.04288986982469586
					},
					{
						token: ' including',
						logprob: -3.1491196155548096,
						prob: 0.04288986982469586
					},
					{
						token: ' during',
						logprob: -5.524119853973389,
						prob: 0.003989378382913896
					}
				]
			},
			{
				token: ' including',
				logprob: -0.0002705145161598921,
				prob: 0.9997295220695928,
				gini: 0.9994664081112541,
				opacity: {
					prob: 0.9997295220695928,
					gini: 0.9994664081112541
				},
				top: [
					{
						token: ' including',
						logprob: -0.0002705145161598921,
						prob: 0.9997295220695928
					},
					{
						token: ' but',
						logprob: -9.00027084350586,
						prob: 0.0001233763838687121
					},
					{
						token: ' as',
						logprob: -9.25027084350586,
						prob: 0.00009608562436947122
					},
					{
						token: ' and',
						logprob: -10.00027084350586,
						prob: 0.00004538763515137516
					},
					{
						token: ' before',
						logprob: -13.12527084350586,
						prob: 0.0000019941935129694035
					}
				]
			},
			{
				token: ' the',
				logprob: -0.003968693315982819,
				prob: 0.9960391715394955,
				gini: 0.9921369419821485,
				opacity: {
					prob: 0.9960391715394955,
					gini: 0.9921369419821485
				},
				top: [
					{
						token: ' the',
						logprob: -0.003968693315982819,
						prob: 0.9960391715394955
					},
					{
						token: ' five',
						logprob: -6.003968715667725,
						prob: 0.0024689342093135004
					},
					{
						token: ' multiple',
						logprob: -6.753968715667725,
						prob: 0.001166241941397781
					},
					{
						token: ' several',
						logprob: -8.128968238830566,
						prob: 0.0002948722816795851
					},
					{
						token: ' three',
						logprob: -11.253968238830566,
						prob: 0.000012955783867538625
					}
				]
			},
			{
				token: ' Premier',
				logprob: -1.7085344791412354,
				prob: 0.18113104953113418,
				gini: 0.6920390551990182,
				opacity: {
					prob: 0.18113104953113418,
					gini: 0.6920390551990182
				},
				top: [
					{
						token: ' UEFA',
						logprob: -0.20853450894355774,
						prob: 0.8117730207898252
					},
					{
						token: ' Premier',
						logprob: -1.7085344791412354,
						prob: 0.18113104953113418
					},
					{
						token: ' Champions',
						logprob: -5.0835347175598145,
						prob: 0.006197962205063072
					},
					{
						token: ' tre',
						logprob: -7.3335347175598145,
						prob: 0.0006532604102773906
					},
					{
						token: ' ',
						logprob: -9.333534240722656,
						prob: 0.00008840922480894994
					}
				]
			},
			{
				token: ' League',
				logprob: 0,
				prob: 1,
				gini: 0.9999999730187985,
				opacity: {
					prob: 1,
					gini: 0.9999999730187985
				},
				top: [
					{
						token: ' League',
						logprob: 0,
						prob: 1
					},
					{
						token: ' league',
						logprob: -18.875,
						prob: 6.34880011604368e-9
					},
					{
						token: 'League',
						logprob: -19.25,
						prob: 4.363462252943702e-9
					},
					{
						token: ' Le',
						logprob: -19.75,
						prob: 2.646573638909117e-9
					},
					{
						token: ' Division',
						logprob: -22.75,
						prob: 1.3176514270095466e-10
					}
				]
			},
			{
				token: ' and',
				logprob: -0.0005549400229938328,
				prob: 0.9994452139277415,
				gini: 0.9988915791899767,
				opacity: {
					prob: 0.9994452139277415,
					gini: 0.9988915791899767
				},
				top: [
					{
						token: ' and',
						logprob: -0.0005549400229938328,
						prob: 0.9994452139277415
					},
					{
						token: ',',
						logprob: -7.500555038452148,
						prob: 0.0005527774722330698
					},
					{
						token: '.',
						logprob: -14.250555038452148,
						prob: 6.472358770701607e-7
					},
					{
						token: ' title',
						logprob: -14.250555038452148,
						prob: 6.472358770701607e-7
					},
					{
						token: ' titles',
						logprob: -14.625555038452148,
						prob: 4.448382791591931e-7
					}
				]
			},
			{
				token: ' the',
				logprob: -0.017935335636138916,
				prob: 0.9822245452301549,
				gini: 0.9650230681614498,
				opacity: {
					prob: 0.9822245452301549,
					gini: 0.9650230681614498
				},
				top: [
					{
						token: ' the',
						logprob: -0.017935335636138916,
						prob: 0.9822245452301549
					},
					{
						token: ' UEFA',
						logprob: -4.142935276031494,
						prob: 0.01587618206748546
					},
					{
						token: ' Champions',
						logprob: -6.267935276031494,
						prob: 0.001896139549062654
					},
					{
						token: ' European',
						logprob: -13.642935752868652,
						prob: 0.0000011883607127269041
					},
					{
						token: ' a',
						logprob: -14.142935752868652,
						prob: 7.207772070668244e-7
					}
				]
			},
			{
				token: ' UEFA',
				logprob: -0.011052536778151989,
				prob: 0.9890083180998589,
				gini: 0.9782596541901728,
				opacity: {
					prob: 0.9890083180998589,
					gini: 0.9782596541901728
				},
				top: [
					{
						token: ' UEFA',
						logprob: -0.011052536778151989,
						prob: 0.9890083180998589
					},
					{
						token: ' Champions',
						logprob: -4.51105260848999,
						prob: 0.01098688919417413
					},
					{
						token: ' FA',
						logprob: -13.011052131652832,
						prob: 0.0000022354854908015753
					},
					{
						token: ' ',
						logprob: -13.511052131652832,
						prob: 0.0000013558904895138997
					},
					{
						token: ' U',
						logprob: -14.636052131652832,
						prob: 4.4019319288840814e-7
					}
				]
			},
			{
				token: ' Champions',
				logprob: -0.0000055577775128767826,
				prob: 0.9999944422379315,
				gini: 0.9999889089873578,
				opacity: {
					prob: 0.9999944422379315,
					gini: 0.9999889089873578
				},
				top: [
					{
						token: ' Champions',
						logprob: -0.0000055577775128767826,
						prob: 0.9999944422379315
					},
					{
						token: ' Champion',
						logprob: -12.125005722045898,
						prob: 0.00000542221734436887
					},
					{
						token: 'Champ',
						logprob: -16.5000057220459,
						prob: 6.825564320030807e-8
					},
					{
						token: ' Championship',
						logprob: -16.8750057220459,
						prob: 4.691137178855366e-8
					},
					{
						token: ' Champ',
						logprob: -18.6250057220459,
						prob: 8.15197406836693e-9
					}
				]
			},
			{
				token: ' League',
				logprob: 0,
				prob: 1,
				gini: 0.9999999703797328,
				opacity: {
					prob: 1,
					gini: 0.9999999703797328
				},
				top: [
					{
						token: ' League',
						logprob: 0,
						prob: 1
					},
					{
						token: ' Cup',
						logprob: -18.375,
						prob: 1.0467401794744656e-8
					},
					{
						token: 'League',
						logprob: -19.875,
						prob: 2.335593038799337e-9
					},
					{
						token: ' league',
						logprob: -20.375,
						prob: 1.4166087866431964e-9
					},
					{
						token: '.',
						logprob: -21.25,
						prob: 5.905303998944039e-10
					}
				]
			},
			{
				token: '.',
				logprob: -0.00037859921576455235,
				prob: 0.9996214724438748,
				gini: 0.999244870711057,
				opacity: {
					prob: 0.9996214724438748,
					gini: 0.999244870711057
				},
				top: [
					{
						token: '.',
						logprob: -0.00037859921576455235,
						prob: 0.9996214724438748
					},
					{
						token: '.\n',
						logprob: -8.000378608703613,
						prob: 0.0003353356428721867
					},
					{
						token: ',',
						logprob: -10.250378608703613,
						prob: 0.00003534411672668275
					},
					{
						token: ' during',
						logprob: -12.500378608703613,
						prob: 0.0000037252424958163805
					},
					{
						token: '.\n\n',
						logprob: -12.625378608703613,
						prob: 0.0000032875149639344633
					}
				]
			}
		]
	},
	{ role: 'user', text: 'Are you sure about the dates?' },
	{
		role: 'assistant',
		tokens: [
			{
				token: 'I',
				logprob: -0.0032456819899380207,
				prob: 0.9967595795418929,
				gini: 0.9935540059281432,
				opacity: {
					prob: 0.9967595795418929,
					gini: 0.9935540059281432
				},
				top: [
					{
						token: 'I',
						logprob: -0.0032456819899380207,
						prob: 0.9967595795418929
					},
					{
						token: 'Ap',
						logprob: -6.003245830535889,
						prob: 0.0024707196103870904
					},
					{
						token: 'My',
						logprob: -7.253245830535889,
						prob: 0.0007078730200724415
					},
					{
						token: 'Yes',
						logprob: -10.12824535369873,
						prob: 0.00003993548209408429
					},
					{
						token: 'You',
						logprob: -11.25324535369873,
						prob: 0.000012965152796989661
					}
				]
			},
			{
				token: ' apologize',
				logprob: -0.000026537622034084052,
				prob: 0.9999734627300855,
				gini: 0.9999489025227896,
				opacity: {
					prob: 0.9999734627300855,
					gini: 0.9999489025227896
				},
				top: [
					{
						token: ' apologize',
						logprob: -0.000026537622034084052,
						prob: 0.9999734627300855
					},
					{
						token: ' appreciate',
						logprob: -10.87502670288086,
						prob: 0.00001892500105525618
					},
					{
						token: ' made',
						logprob: -12.00002670288086,
						prob: 0.000006144048287348291
					},
					{
						token: ' regret',
						logprob: -15.12502670288086,
						prob: 2.699506417802319e-7
					},
					{
						token: ' apologise',
						logprob: -15.37502670288086,
						prob: 2.102377712090729e-7
					}
				]
			},
			{
				token: ' for',
				logprob: -0.00000877627644513268,
				prob: 0.9999912237620663,
				gini: 0.9999826717782251,
				opacity: {
					prob: 0.9999912237620663,
					gini: 0.9999826717782251
				},
				top: [
					{
						token: ' for',
						logprob: -0.00000877627644513268,
						prob: 0.9999912237620663
					},
					{
						token: ';',
						logprob: -12.250008583068848,
						prob: 0.000004785076321313246
					},
					{
						token: ',',
						logprob: -12.500008583068848,
						prob: 0.000003726621186095193
					},
					{
						token: '.',
						logprob: -16.125009536743164,
						prob: 9.931099601358393e-8
					},
					{
						token: ' if',
						logprob: -16.750009536743164,
						prob: 5.3157345593874676e-8
					}
				]
			},
			{
				token: ' the',
				logprob: -0.018351983278989792,
				prob: 0.9818153889315572,
				gini: 0.9642861950964593,
				opacity: {
					prob: 0.9818153889315572,
					gini: 0.9642861950964593
				},
				top: [
					{
						token: ' the',
						logprob: -0.018351983278989792,
						prob: 0.9818153889315572
					},
					{
						token: ' any',
						logprob: -4.018352031707764,
						prob: 0.01798257524819841
					},
					{
						token: ' my',
						logprob: -8.768351554870605,
						prob: 0.00015557983420082236
					},
					{
						token: ' that',
						logprob: -10.018351554870605,
						prob: 0.00004457436879324866
					},
					{
						token: ' providing',
						logprob: -13.643351554870605,
						prob: 0.0000011878666926778902
					}
				]
			},
			{
				token: ' confusion',
				logprob: -0.660287618637085,
				prob: 0.5167026997913768,
				gini: 0.39528837569108005,
				opacity: {
					prob: 0.5167026997913768,
					gini: 0.39528837569108005
				},
				top: [
					{
						token: ' confusion',
						logprob: -0.660287618637085,
						prob: 0.5167026997913768
					},
					{
						token: ' error',
						logprob: -1.160287618637085,
						prob: 0.3133960293797625
					},
					{
						token: ' mistake',
						logprob: -2.160287618637085,
						prob: 0.11529195615357596
					},
					{
						token: ' incorrect',
						logprob: -3.660287618637085,
						prob: 0.025725112640373155
					},
					{
						token: ' earlier',
						logprob: -4.785287857055664,
						prob: 0.00835171930056333
					}
				]
			},
			{
				token: ' in',
				logprob: -0.11528835445642471,
				prob: 0.8911091515611544,
				gini: 0.8035319694463854,
				opacity: {
					prob: 0.8911091515611544,
					gini: 0.8035319694463854
				},
				top: [
					{
						token: ' in',
						logprob: -0.11528835445642471,
						prob: 0.8911091515611544
					},
					{
						token: '.',
						logprob: -2.365288257598877,
						prob: 0.09392222267160225
					},
					{
						token: ' earlier',
						logprob: -4.365288257598877,
						prob: 0.012710990607473497
					},
					{
						token: ';',
						logprob: -6.865288257598877,
						prob: 0.0010433816465228525
					},
					{
						token: ' regarding',
						logprob: -6.990288257598877,
						prob: 0.0009207810712700325
					}
				]
			},
			{
				token: ' my',
				logprob: -0.0011717714369297028,
				prob: 0.9988289148191493,
				gini: 0.997661416801947,
				opacity: {
					prob: 0.9988289148191493,
					gini: 0.997661416801947
				},
				top: [
					{
						token: ' my',
						logprob: -0.0011717714369297028,
						prob: 0.9988289148191493
					},
					{
						token: ' the',
						logprob: -6.751171588897705,
						prob: 0.0011695086344998855
					},
					{
						token: ' that',
						logprob: -14.251172065734863,
						prob: 6.468366380590042e-7
					},
					{
						token: ' previous',
						logprob: -14.751172065734863,
						prob: 3.923262528082297e-7
					},
					{
						token: ' your',
						logprob: -16.001171112060547,
						prob: 1.1240346055998374e-7
					}
				]
			},
			{
				token: ' previous',
				logprob: -0.020175233483314514,
				prob: 0.9800269247273818,
				gini: 0.960889843461473,
				opacity: {
					prob: 0.9800269247273818,
					gini: 0.960889843461473
				},
				top: [
					{
						token: ' previous',
						logprob: -0.020175233483314514,
						prob: 0.9800269247273818
					},
					{
						token: ' earlier',
						logprob: -4.020175457000732,
						prob: 0.0179498152424466
					},
					{
						token: ' initial',
						logprob: -6.770175457000732,
						prob: 0.00114749329750517
					},
					{
						token: ' response',
						logprob: -7.270175457000732,
						prob: 0.000695989866751636
					},
					{
						token: ' last',
						logprob: -9.020174980163574,
						prob: 0.00012094496141801958
					}
				]
			},
			{
				token: ' response',
				logprob: -0.0910385474562645,
				prob: 0.9129825170673069,
				gini: 0.8408298849409769,
				opacity: {
					prob: 0.9129825170673069,
					gini: 0.8408298849409769
				},
				top: [
					{
						token: ' response',
						logprob: -0.0910385474562645,
						prob: 0.9129825170673069
					},
					{
						token: ' message',
						logprob: -2.466038465499878,
						prob: 0.08492060944306742
					},
					{
						token: ' answer',
						logprob: -6.341038703918457,
						prob: 0.0017624706006161318
					},
					{
						token: ' reply',
						logprob: -8.466038703918457,
						prob: 0.00021049709531441272
					},
					{
						token: ' messages',
						logprob: -9.466038703918457,
						prob: 0.00007743755379247799
					}
				]
			},
			{
				token: '.',
				logprob: -0.004276534542441368,
				prob: 0.9957325968099194,
				gini: 0.991549884384925,
				opacity: {
					prob: 0.9957325968099194,
					gini: 0.991549884384925
				},
				top: [
					{
						token: '.',
						logprob: -0.004276534542441368,
						prob: 0.9957325968099194
					},
					{
						token: ' regarding',
						logprob: -5.504276752471924,
						prob: 0.004069330650163216
					},
					{
						token: ';',
						logprob: -9.254276275634766,
						prob: 0.0000957015296686414
					},
					{
						token: ' about',
						logprob: -9.629276275634766,
						prob: 0.00006577463530515337
					},
					{
						token: '.\n\n',
						logprob: -11.379276275634766,
						prob: 0.000011429917755991373
					}
				]
			},
			{
				token: ' Peter',
				logprob: -0.00025883622583933175,
				prob: 0.9997411972693666,
				gini: 0.9994870515144343,
				opacity: {
					prob: 0.9997411972693666,
					gini: 0.9994870515144343
				},
				top: [
					{
						token: ' Peter',
						logprob: -0.00025883622583933175,
						prob: 0.9997411972693666
					},
					{
						token: ' \n\n',
						logprob: -8.375258445739746,
						prob: 0.00023050028807627363
					},
					{
						token: ' To',
						logprob: -11.250258445739746,
						prob: 0.00001300393640777192
					},
					{
						token: ' The',
						logprob: -11.500258445739746,
						prob: 0.000010127475857383523
					},
					{
						token: ' **',
						logprob: -12.750258445739746,
						prob: 0.0000029015704132261455
					}
				]
			},
			{
				token: ' Sch',
				logprob: 0,
				prob: 1,
				gini: 0.9999999942437499,
				opacity: {
					prob: 1,
					gini: 0.9999999942437499
				},
				top: [
					{
						token: ' Sch',
						logprob: 0,
						prob: 1
					},
					{
						token: 'Sch',
						logprob: -19.75,
						prob: 2.646573638909117e-9
					},
					{
						token: ' sch',
						logprob: -22.5,
						prob: 1.6918979226151304e-10
					},
					{
						token: '-Sch',
						logprob: -23.75,
						prob: 4.8473687062702556e-11
					},
					{
						token: ' Schmidt',
						logprob: -25,
						prob: 1.3887943864964021e-11
					}
				]
			},
			{
				token: 'me',
				logprob: 0,
				prob: 1,
				gini: 0.9999999953423915,
				opacity: {
					prob: 1,
					gini: 0.9999999942437499
				},
				top: [
					{
						token: 'me',
						logprob: 0,
						prob: 1
					},
					{
						token: 'ME',
						logprob: -20.625,
						prob: 1.103256032343554e-9
					},
					{
						token: '-me',
						logprob: -20.75,
						prob: 9.736200313009565e-10
					},
					{
						token: 'Me',
						logprob: -22.625,
						prob: 1.493094676197164e-10
					},
					{
						token: ' me',
						logprob: -23,
						prob: 1.026187963170189e-10
					}
				]
			},
			{
				token: 'ichel',
				logprob: -4.320199877838604e-7,
				prob: 0.9999995679801056,
				gini: 0.9999991375530192,
				opacity: {
					prob: 1,
					gini: 0.9999999942437499
				},
				top: [
					{
						token: 'ichel',
						logprob: -4.320199877838604e-7,
						prob: 0.9999995679801056
					},
					{
						token: 'ichael',
						logprob: -15.125,
						prob: 2.6995785033630146e-7
					},
					{
						token: 'iche',
						logprob: -16,
						prob: 1.1253517471925912e-7
					},
					{
						token: 'ich',
						logprob: -16.875,
						prob: 4.691164021834418e-8
					},
					{
						token: 'ic',
						logprob: -20.125,
						prob: 1.8189616875530459e-9
					}
				]
			},
			{
				token: "'s",
				logprob: -0.07345354557037354,
				prob: 0.9291793092837773,
				gini: 0.8656904317227957,
				opacity: {
					prob: 1,
					gini: 0.9999999942437499
				},
				top: [
					{
						token: "'s",
						logprob: -0.07345354557037354,
						prob: 0.9291793092837773
					},
					{
						token: ' played',
						logprob: -3.198453426361084,
						prob: 0.04082529450299894
					},
					{
						token: '’s',
						logprob: -3.823453426361084,
						prob: 0.021852205455383692
					},
					{
						token: ' actually',
						logprob: -4.823453426361084,
						prob: 0.008038977131290096
					},
					{
						token: ' indeed',
						logprob: -10.073453903198242,
						prob: 0.00004218466029182483
					}
				]
			},
			{
				token: ' last',
				logprob: -0.005043167620897293,
				prob: 0.9949695277982539,
				gini: 0.9899789416313207,
				opacity: {
					prob: 0.9949695277982539,
					gini: 0.9899789416313207
				},
				top: [
					{
						token: ' last',
						logprob: -0.005043167620897293,
						prob: 0.9949695277982539
					},
					{
						token: ' final',
						logprob: -6.005043029785156,
						prob: 0.002466283222688573
					},
					{
						token: ' actual',
						logprob: -6.005043029785156,
						prob: 0.002466283222688573
					},
					{
						token: ' official',
						logprob: -9.255043029785156,
						prob: 0.00009562817824841586
					},
					{
						token: ' professional',
						logprob: -13.755043029785156,
						prob: 0.00000106233310112007
					}
				]
			},
			{
				token: ' professional',
				logprob: -0.002537140157073736,
				prob: 0.9974660756627778,
				gini: 0.994945088654198,
				opacity: {
					prob: 0.9974660756627778,
					gini: 0.994945088654198
				},
				top: [
					{
						token: ' professional',
						logprob: -0.002537140157073736,
						prob: 0.9974660756627778
					},
					{
						token: ' official',
						logprob: -6.502537250518799,
						prob: 0.0014996294263152532
					},
					{
						token: ' competitive',
						logprob: -6.877537250518799,
						prob: 0.0010306792268659297
					},
					{
						token: ' appearance',
						logprob: -13.75253677368164,
						prob: 0.0000010649989191546745
					},
					{
						token: ' match',
						logprob: -13.87753677368164,
						prob: 9.398582474099421e-7
					}
				]
			},
			{
				token: ' match',
				logprob: -1.542043924331665,
				prob: 0.21394337017469064,
				gini: 0.3486420327876506,
				opacity: {
					prob: 0.21394337017469064,
					gini: 0.3486420327876506
				},
				top: [
					{
						token: ' soccer',
						logprob: -0.7920439839363098,
						prob: 0.45291809121796894
					},
					{
						token: ' game',
						logprob: -1.167043924331665,
						prob: 0.31128576681865866
					},
					{
						token: ' match',
						logprob: -1.542043924331665,
						prob: 0.21394337017469064
					},
					{
						token: ' appearance',
						logprob: -4.292044162750244,
						prob: 0.013676938813786177
					},
					{
						token: ' football',
						logprob: -4.917044162750244,
						prob: 0.007320737807234013
					}
				]
			},
			{
				token: ' was',
				logprob: -0.20687855780124664,
				prob: 0.8131183908770292,
				gini: 0.6875334092818626,
				opacity: {
					prob: 0.8131183908770292,
					gini: 0.6875334092818626
				},
				top: [
					{
						token: ' was',
						logprob: -0.20687855780124664,
						prob: 0.8131183908770292
					},
					{
						token: ' took',
						logprob: -1.8318785429000854,
						prob: 0.1601125068727967
					},
					{
						token: ' actually',
						logprob: -3.831878662109375,
						prob: 0.021668868884223424
					},
					{
						token: ' occurred',
						logprob: -5.331878662109375,
						prob: 0.0048349781843721
					},
					{
						token: ' as',
						logprob: -9.331878662109375,
						prob: 0.00008855571445986702
					}
				]
			},
			{
				token: ' actually',
				logprob: -0.16236616671085358,
				prob: 0.8501298582873875,
				gini: 0.731474153114872,
				opacity: {
					prob: 0.8501298582873875,
					gini: 0.731474153114872
				},
				top: [
					{
						token: ' actually',
						logprob: -0.16236616671085358,
						prob: 0.8501298582873875
					},
					{
						token: ' on',
						logprob: -2.7873661518096924,
						prob: 0.061583201299562185
					},
					{
						token: ' indeed',
						logprob: -2.7873661518096924,
						prob: 0.061583201299562185
					},
					{
						token: ' played',
						logprob: -3.6623661518096924,
						prob: 0.025671697672003634
					},
					{
						token: ' not',
						logprob: -7.2873663902282715,
						prob: 0.0006841274069420116
					}
				]
			},
			{
				token: ' on',
				logprob: -0.1808721274137497,
				prob: 0.8345420669255479,
				gini: 0.7235181967882536,
				opacity: {
					prob: 0.8345420669255479,
					gini: 0.7235181967882536
				},
				top: [
					{
						token: ' on',
						logprob: -0.1808721274137497,
						prob: 0.8345420669255479
					},
					{
						token: ' played',
						logprob: -1.8058720827102661,
						prob: 0.164331083772852
					},
					{
						token: ' for',
						logprob: -6.930871963500977,
						prob: 0.000977148459023169
					},
					{
						token: ' with',
						logprob: -9.555871963500977,
						prob: 0.00007078439695803158
					},
					{
						token: ' in',
						logprob: -10.055871963500977,
						prob: 0.00004293290698431582
					}
				]
			},
			{
				token: ' May',
				logprob: -0.034366656094789505,
				prob: 0.9662171702676792,
				gini: 0.9350059590470949,
				opacity: {
					prob: 0.9662171702676792,
					gini: 0.9350059590470949
				},
				top: [
					{
						token: ' May',
						logprob: -0.034366656094789505,
						prob: 0.9662171702676792
					},
					{
						token: ' April',
						logprob: -3.4093666076660156,
						prob: 0.033062135048141233
					},
					{
						token: ' **',
						logprob: -8.159366607666016,
						prob: 0.00028604351520093013
					},
					{
						token: ' November',
						logprob: -8.909366607666016,
						prob: 0.0001351173892093854
					},
					{
						token: ' December',
						logprob: -9.034366607666016,
						prob: 0.00011924067746259986
					}
				]
			},
			{
				token: ' ',
				logprob: 0,
				prob: 1,
				gini: 0.9999999936214836,
				opacity: {
					prob: 1,
					gini: 0.9999999936214836
				},
				top: [
					{
						token: ' ',
						logprob: 0,
						prob: 1
					},
					{
						token: ' **',
						logprob: -20.125,
						prob: 1.8189616875530459e-9
					},
					{
						token: ',',
						logprob: -21,
						prob: 7.582560427911907e-10
					},
					{
						token: ' ',
						logprob: -21.25,
						prob: 5.905303998944039e-10
					},
					{
						token: '.',
						logprob: -24.5625,
						prob: 2.15100682437863e-11
					}
				]
			},
			{
				token: '11',
				logprob: -0.038581520318984985,
				prob: 0.9621532665015082,
				gini: 0.9452104817899946,
				opacity: {
					prob: 0.9621532665015082,
					gini: 0.9452104817899946
				},
				top: [
					{
						token: '11',
						logprob: -0.038581520318984985,
						prob: 0.9621532665015082
					},
					{
						token: '19',
						logprob: -4.288581371307373,
						prob: 0.013724381294777238
					},
					{
						token: '24',
						logprob: -4.663581371307373,
						prob: 0.009432620121939758
					},
					{
						token: '14',
						logprob: -6.038581371307373,
						prob: 0.0023849398590109665
					},
					{
						token: '4',
						logprob: -6.163581371307373,
						prob: 0.0021047020384277197
					}
				]
			},
			{
				token: ',',
				logprob: 0,
				prob: 1,
				gini: 0.9999999968532447,
				opacity: {
					prob: 1,
					gini: 0.9999999968532447
				},
				top: [
					{
						token: ',',
						logprob: 0,
						prob: 1
					},
					{
						token: 'th',
						logprob: -20.625,
						prob: 1.103256032343554e-9
					},
					{
						token: ' and',
						logprob: -21.875,
						prob: 3.160881454313692e-10
					},
					{
						token: ' ',
						logprob: -22.875,
						prob: 1.162823303022097e-10
					},
					{
						token: '.',
						logprob: -24,
						prob: 3.775134544279098e-11
					}
				]
			},
			{
				token: ' ',
				logprob: 0,
				prob: 1,
				gini: 0.9999999901311756,
				opacity: {
					prob: 1,
					gini: 0.9999999901311756
				},
				top: [
					{
						token: ' ',
						logprob: 0,
						prob: 1
					},
					{
						token: ' **',
						logprob: -19.5,
						prob: 3.398267819495071e-9
					},
					{
						token: '200',
						logprob: -20.75,
						prob: 9.736200313009565e-10
					},
					{
						token: ' ',
						logprob: -21.5,
						prob: 4.5990553786523166e-10
					},
					{
						token: ' in',
						logprob: -23,
						prob: 1.026187963170189e-10
					}
				]
			},
			{
				token: '200',
				logprob: -0.00016671013145241886,
				prob: 0.9998333037639093,
				gini: 0.999667125463647,
				opacity: {
					prob: 0.9998333037639093,
					gini: 0.999667125463647
				},
				top: [
					{
						token: '200',
						logprob: -0.00016671013145241886,
						prob: 0.9998333037639093
					},
					{
						token: '199',
						logprob: -8.750166893005371,
						prob: 0.00015843488123567828
					},
					{
						token: '２００',
						logprob: -11.750166893005371,
						prob: 0.000007888008263935119
					},
					{
						token: '201',
						logprob: -16.250165939331055,
						prob: 8.762794006615793e-8
					},
					{
						token: ' Sch',
						logprob: -16.750165939331055,
						prob: 5.3149032297585874e-8
					}
				]
			},
			{
				token: '3',
				logprob: -0.000027729658540920354,
				prob: 0.9999722707259225,
				gini: 0.9999474589921603,
				opacity: {
					prob: 0.9999722707259225,
					gini: 0.9999474589921603
				},
				top: [
					{
						token: '3',
						logprob: -0.000027729658540920354,
						prob: 0.9999722707259225
					},
					{
						token: '1',
						logprob: -11.375027656555176,
						prob: 0.000011478582428272343
					},
					{
						token: '4',
						logprob: -11.500027656555176,
						prob: 0.000010129813439012308
					},
					{
						token: '2',
						logprob: -12.750027656555176,
						prob: 0.000002902240141575845
					},
					{
						token: '5',
						logprob: -13.250027656555176,
						prob: 0.0000017602976277144838
					}
				]
			},
			{
				token: ',',
				logprob: -0.07890058308839798,
				prob: 0.9241317942072005,
				gini: 0.859775183403804,
				opacity: {
					prob: 0.9241317942072005,
					gini: 0.859775183403804
				},
				top: [
					{
						token: ',',
						logprob: -0.07890058308839798,
						prob: 0.9241317942072005
					},
					{
						token: '.',
						logprob: -2.5789005756378174,
						prob: 0.07585735762098053
					},
					{
						token: ';',
						logprob: -12.078900337219238,
						prob: 0.000005678063382131744
					},
					{
						token: ' while',
						logprob: -12.578900337219238,
						prob: 0.0000034439195290545135
					},
					{
						token: ' when',
						logprob: -13.828900337219238,
						prob: 9.86699465074605e-7
					}
				]
			},
			{
				token: ' while',
				logprob: -0.78711998462677,
				prob: 0.45515375928328683,
				gini: 0.4236932439738876,
				opacity: {
					prob: 0.45515375928328683,
					gini: 0.4236932439738876
				},
				top: [
					{
						token: ' when',
						logprob: -0.78711998462677,
						prob: 0.45515375928328683
					},
					{
						token: ' while',
						logprob: -0.78711998462677,
						prob: 0.45515375928328683
					},
					{
						token: ' for',
						logprob: -2.9121198654174805,
						prob: 0.05436037096921975
					},
					{
						token: ' playing',
						logprob: -3.7871198654174805,
						prob: 0.0226607740327019
					},
					{
						token: ' where',
						logprob: -5.1621198654174805,
						prob: 0.0057295409470510435
					}
				]
			},
			{
				token: ' playing',
				logprob: -0.3132750391960144,
				prob: 0.7310488178365779,
				gini: 0.606762198544974,
				opacity: {
					prob: 0.7310488178365779,
					gini: 0.606762198544974
				},
				top: [
					{
						token: ' playing',
						logprob: -0.3132750391960144,
						prob: 0.7310488178365779
					},
					{
						token: ' he',
						logprob: -1.3132750988006592,
						prob: 0.2689378145448204
					},
					{
						token: ' representing',
						logprob: -11.938275337219238,
						prob: 0.000006535410892342958
					},
					{
						token: ' with',
						logprob: -12.563275337219238,
						prob: 0.00000349815337019406
					},
					{
						token: ' at',
						logprob: -13.438275337219238,
						prob: 0.000001458247279044277
					}
				]
			},
			{
				token: ' for',
				logprob: -0.00000436574100604048,
				prob: 0.9999956342685238,
				gini: 0.9999913085884731,
				opacity: {
					prob: 0.9999956342685238,
					gini: 0.9999913085884731
				},
				top: [
					{
						token: ' for',
						logprob: -0.00000436574100604048,
						prob: 0.9999956342685238
					},
					{
						token: ' with',
						logprob: -12.625004768371582,
						prob: 0.000003288744199374715
					},
					{
						token: ' as',
						logprob: -14.125004768371582,
						prob: 7.338180198936997e-7
					},
					{
						token: ' in',
						logprob: -15.000004768371582,
						prob: 3.0590086184937156e-7
					},
					{
						token: ' on',
						logprob: -17.875003814697266,
						prob: 1.7257762154696544e-8
					}
				]
			},
			{
				token: ' Manchester',
				logprob: -0.00004203409844194539,
				prob: 0.9999579667849784,
				gini: 0.9999278672564622,
				opacity: {
					prob: 0.9999579667849784,
					gini: 0.9999278672564622
				},
				top: [
					{
						token: ' Manchester',
						logprob: -0.00004203409844194539,
						prob: 0.9999579667849784
					},
					{
						token: 'Manchester',
						logprob: -10.625041961669922,
						prob: 0.000024299811577263264
					},
					{
						token: ' Aston',
						logprob: -11.625041961669922,
						prob: 0.000008939401103614954
					},
					{
						token: ' **',
						logprob: -13.250041961669922,
						prob: 0.0000017602724466350415
					},
					{
						token: ' the',
						logprob: -13.750041961669922,
						prob: 0.000001067659208331523
					}
				]
			},
			{
				token: ' City',
				logprob: -0.000004842555426876061,
				prob: 0.9999951574562983,
				gini: 0.9999903992878019,
				opacity: {
					prob: 0.9999951574562983,
					gini: 0.9999903992878019
				},
				top: [
					{
						token: ' City',
						logprob: -0.000004842555426876061,
						prob: 0.9999951574562983
					},
					{
						token: " City's",
						logprob: -12.375004768371582,
						prob: 0.000004222831140981511
					},
					{
						token: 'City',
						logprob: -14.500004768371582,
						prob: 5.043452576565602e-7
					},
					{
						token: ' United',
						logprob: -16.5000057220459,
						prob: 6.825564320030807e-8
					},
					{
						token: ' city',
						logprob: -19.1250057220459,
						prob: 4.944422209646875e-9
					}
				]
			},
			{
				token: ' against',
				logprob: -0.8273234367370605,
				prob: 0.4372179631431592,
				gini: 0.5063331689340596,
				opacity: {
					prob: 0.4372179631431592,
					gini: 0.5063331689340596
				},
				top: [
					{
						token: ' in',
						logprob: -0.5773234367370605,
						prob: 0.5613989773082606
					},
					{
						token: ' against',
						logprob: -0.8273234367370605,
						prob: 0.4372179631431592
					},
					{
						token: '.',
						logprob: -6.8273234367370605,
						prob: 0.0010837549778187376
					},
					{
						token: ',',
						logprob: -8.327323913574219,
						prob: 0.00024181830645437138
					},
					{
						token: ' during',
						logprob: -9.827323913574219,
						prob: 0.00005395695744598597
					}
				]
			},
			{
				token: ' Blackburn',
				logprob: -3.1837575435638428,
				prob: 0.041429688419771446,
				gini: 0.43083696514942776,
				opacity: {
					prob: 0.041429688419771446,
					gini: 0.43083696514942776
				},
				top: [
					{
						token: ' the',
						logprob: -1.1837575435638428,
						prob: 0.30612629189490875
					},
					{
						token: ' W',
						logprob: -2.9962575435638428,
						prob: 0.04997374339601443
					},
					{
						token: ' Q',
						logprob: -2.9962575435638428,
						prob: 0.04997374339601443
					},
					{
						token: ' Blackburn',
						logprob: -3.1837575435638428,
						prob: 0.041429688419771446
					},
					{
						token: ' Queens',
						logprob: -3.2462575435638428,
						prob: 0.03891959048982548
					}
				]
			},
			{
				token: ' R',
				logprob: -0.0000017432603272027336,
				prob: 0.9999982567411922,
				gini: 0.9999965741341826,
				opacity: {
					prob: 0.9999982567411922,
					gini: 0.9999965741341826
				},
				top: [
					{
						token: ' R',
						logprob: -0.0000017432603272027336,
						prob: 0.9999982567411922
					},
					{
						token: ' Rover',
						logprob: -13.500001907348633,
						prob: 0.000001370956471489639
					},
					{
						token: '.',
						logprob: -15.125001907348633,
						prob: 2.6995733543305574e-7
					},
					{
						token: ' in',
						logprob: -16.875001907348633,
						prob: 4.691155074157667e-8
					},
					{
						token: 'R',
						logprob: -17.500001907348633,
						prob: 2.5109943663977424e-8
					}
				]
			},
			{
				token: 'overs',
				logprob: -4.320199877838604e-7,
				prob: 0.9999995679801056,
				gini: 0.9999992145049957,
				opacity: {
					prob: 0.9999982567411922,
					gini: 0.9999965741341826
				},
				top: [
					{
						token: 'overs',
						logprob: -4.320199877838604e-7,
						prob: 0.9999995679801056
					},
					{
						token: ' overs',
						logprob: -14.875,
						prob: 3.466327412661964e-7
					},
					{
						token: 'Overs',
						logprob: -17.375,
						prob: 2.8453348089834e-8
					},
					{
						token: ' Overs',
						logprob: -18.375,
						prob: 1.0467401794744656e-8
					},
					{
						token: 'over',
						logprob: -18.75,
						prob: 7.194133030325383e-9
					}
				]
			},
			{
				token: ' in',
				logprob: -0.03821040317416191,
				prob: 0.962510404340543,
				gini: 0.9278322516578097,
				opacity: {
					prob: 0.962510404340543,
					gini: 0.9278322516578097
				},
				top: [
					{
						token: ' in',
						logprob: -0.03821040317416191,
						prob: 0.962510404340543
					},
					{
						token: '.',
						logprob: -3.288210391998291,
						prob: 0.03732057887518497
					},
					{
						token: ',',
						logprob: -8.91321086883545,
						prob: 0.00013459895980420875
					},
					{
						token: ' at',
						logprob: -10.78821086883545,
						prob: 0.00002064141901813629
					},
					{
						token: ' during',
						logprob: -11.91321086883545,
						prob: 0.000006701287614015512
					}
				]
			},
			{
				token: ' the',
				logprob: -0.0297810360789299,
				prob: 0.970658049373519,
				gini: 0.9430482186858907,
				opacity: {
					prob: 0.970658049373519,
					gini: 0.9430482186858907
				},
				top: [
					{
						token: ' the',
						logprob: -0.0297810360789299,
						prob: 0.970658049373519
					},
					{
						token: ' a',
						logprob: -3.5297811031341553,
						prob: 0.02931133132341392
					},
					{
						token: ' Premier',
						logprob: -11.529781341552734,
						prob: 0.000009832853888738312
					},
					{
						token: ' an',
						logprob: -11.779781341552734,
						prob: 0.000007657834308376106
					},
					{
						token: ' their',
						logprob: -11.904781341552734,
						prob: 0.000006758015057647961
					}
				]
			},
			{
				token: ' Premier',
				logprob: -0.00672922981902957,
				prob: 0.9932933607471758,
				gini: 0.986689168335186,
				opacity: {
					prob: 0.9932933607471758,
					gini: 0.986689168335186
				},
				top: [
					{
						token: ' Premier',
						logprob: -0.00672922981902957,
						prob: 0.9932933607471758
					},
					{
						token: ' final',
						logprob: -5.5067291259765625,
						prob: 0.0040593633582518265
					},
					{
						token: ' English',
						logprob: -6.0067291259765625,
						prob: 0.0024621283356937715
					},
					{
						token: ' FA',
						logprob: -8.756729125976562,
						prob: 0.00015739859851733335
					},
					{
						token: ' last',
						logprob: -11.506729125976562,
						prob: 0.000010062155760146375
					}
				]
			},
			{
				token: ' League',
				logprob: -4.320199877838604e-7,
				prob: 0.9999995679801056,
				gini: 0.9999991740471024,
				opacity: {
					prob: 0.9999995679801056,
					gini: 0.9999991740471024
				},
				top: [
					{
						token: ' League',
						logprob: -4.320199877838604e-7,
						prob: 0.9999995679801056
					},
					{
						token: ' league',
						logprob: -15.75,
						prob: 1.4449802461092448e-7
					},
					{
						token: ' Division',
						logprob: -15.875,
						prob: 1.2751905914873347e-7
					},
					{
						token: 'League',
						logprob: -15.875,
						prob: 1.2751905914873347e-7
					},
					{
						token: ' Le',
						logprob: -18.125,
						prob: 1.3440409951135022e-8
					}
				]
			},
			{
				token: '.',
				logprob: -0.00010556964843999594,
				prob: 0.9998944359238392,
				gini: 0.9997919156433579,
				opacity: {
					prob: 0.9998944359238392,
					gini: 0.9997919156433579
				},
				top: [
					{
						token: '.',
						logprob: -0.00010556964843999594,
						prob: 0.9998944359238392
					},
					{
						token: ',',
						logprob: -9.250105857849121,
						prob: 0.00009610147842712102
					},
					{
						token: '.\n\n',
						logprob: -12.625105857849121,
						prob: 0.000003288411758745248
					},
					{
						token: ' at',
						logprob: -12.750105857849121,
						prob: 0.0000029020131915154433
					},
					{
						token: ' before',
						logprob: -13.250105857849121,
						prob: 0.0000017601599755446266
					}
				]
			},
			{
				token: ' Thank',
				logprob: -0.13062936067581177,
				prob: 0.8775429660547963,
				gini: 0.7855073901265789,
				opacity: {
					prob: 0.8775429660547963,
					gini: 0.7855073901265789
				},
				top: [
					{
						token: ' Thank',
						logprob: -0.13062936067581177,
						prob: 0.8775429660547963
					},
					{
						token: ' After',
						logprob: -2.755629301071167,
						prob: 0.06356900303713356
					},
					{
						token: ' This',
						logprob: -3.630629301071167,
						prob: 0.02649950299500873
					},
					{
						token: ' He',
						logprob: -3.880629301071167,
						prob: 0.020637833683515835
					},
					{
						token: ' That',
						logprob: -5.255629539489746,
						prob: 0.00521806028274306
					}
				]
			},
			{
				token: ' you',
				logprob: 0,
				prob: 1,
				gini: 0.9999999885184914,
				opacity: {
					prob: 1,
					gini: 0.9999999885184914
				},
				top: [
					{
						token: ' you',
						logprob: 0,
						prob: 1
					},
					{
						token: 'ing',
						logprob: -20,
						prob: 2.061153622438558e-9
					},
					{
						token: ' your',
						logprob: -20.4375,
						prob: 1.3307807990689665e-9
					},
					{
						token: '你',
						logprob: -20.5625,
						prob: 1.174409933197416e-9
					},
					{
						token: '您',
						logprob: -20.5625,
						prob: 1.174409933197416e-9
					}
				]
			},
			{
				token: ' for',
				logprob: 0,
				prob: 1,
				gini: 0.9999999466110595,
				opacity: {
					prob: 1,
					gini: 0.9999999466110595
				},
				top: [
					{
						token: ' for',
						logprob: 0,
						prob: 1
					},
					{
						token: ',',
						logprob: -18.25,
						prob: 1.186112015134383e-8
					},
					{
						token: ' to',
						logprob: -19.125,
						prob: 4.944450501938644e-9
					},
					{
						token: ' and',
						logprob: -19.125,
						prob: 4.944450501938644e-9
					},
					{
						token: ' very',
						logprob: -19.125,
						prob: 4.944450501938644e-9
					}
				]
			},
			{
				token: ' bringing',
				logprob: -2.5163142681121826,
				prob: 0.0807567064664285,
				gini: 0.7622416135875385,
				opacity: {
					prob: 0.0807567064664285,
					gini: 0.7622416135875385
				},
				top: [
					{
						token: ' your',
						logprob: -0.1413143277168274,
						prob: 0.868216364334941
					},
					{
						token: ' bringing',
						logprob: -2.5163142681121826,
						prob: 0.0807567064664285
					},
					{
						token: ' pointing',
						logprob: -3.2663142681121826,
						prob: 0.03814676704426484
					},
					{
						token: ' catching',
						logprob: -4.391314506530762,
						prob: 0.01238443908998404
					},
					{
						token: ' prompting',
						logprob: -8.141314506530762,
						prob: 0.0002912540910874694
					}
				]
			},
			{
				token: ' this',
				logprob: -0.20548029243946075,
				prob: 0.8142561414112324,
				gini: 0.6790034388007878,
				opacity: {
					prob: 0.8142561414112324,
					gini: 0.6790034388007878
				},
				top: [
					{
						token: ' this',
						logprob: -0.20548029243946075,
						prob: 0.8142561414112324
					},
					{
						token: ' it',
						logprob: -2.3304803371429443,
						prob: 0.09724902355077905
					},
					{
						token: ' that',
						logprob: -2.5804803371429443,
						prob: 0.07573761569427623
					},
					{
						token: ' the',
						logprob: -4.455480098724365,
						prob: 0.011614742312879692
					},
					{
						token: ' up',
						logprob: -7.330480098724365,
						prob: 0.0006552589226238464
					}
				]
			},
			{
				token: ' to',
				logprob: -0.0005290837725624442,
				prob: 0.9994710561675756,
				gini: 0.9989781292769552,
				opacity: {
					prob: 0.9994710561675756,
					gini: 0.9989781292769552
				},
				top: [
					{
						token: ' to',
						logprob: -0.0005290837725624442,
						prob: 0.9994710561675756
					},
					{
						token: ' up',
						logprob: -8.125529289245605,
						prob: 0.00029588807822573997
					},
					{
						token: ' error',
						logprob: -8.750529289245605,
						prob: 0.00015837747543284833
					},
					{
						token: ' oversight',
						logprob: -10.000529289245605,
						prob: 0.00004537590642611795
					},
					{
						token: ' mistake',
						logprob: -11.375529289245605,
						prob: 0.000011472825840053661
					}
				]
			},
			{
				token: ' my',
				logprob: -0.00020377879263833165,
				prob: 0.9997962419688495,
				gini: 0.9995928751123986,
				opacity: {
					prob: 0.9997962419688495,
					gini: 0.9995928751123986
				},
				top: [
					{
						token: ' my',
						logprob: -0.00020377879263833165,
						prob: 0.9997962419688495
					},
					{
						token: ' attention',
						logprob: -8.500204086303711,
						prob: 0.0002034268481403553
					},
					{
						token: ' light',
						logprob: -16.00020408630371,
						prob: 1.125122101748674e-7
					},
					{
						token: ' the',
						logprob: -17.25020408630371,
						prob: 3.2235287920441394e-8
					},
					{
						token: ' me',
						logprob: -17.25020408630371,
						prob: 3.2235287920441394e-8
					}
				]
			},
			{
				token: ' attention',
				logprob: -3.128163257315464e-7,
				prob: 0.9999996871837232,
				gini: 0.9999995337541095,
				opacity: {
					prob: 0.9999996871837232,
					gini: 0.9999995337541095
				},
				top: [
					{
						token: ' attention',
						logprob: -3.128163257315464e-7,
						prob: 0.9999996871837232
					},
					{
						token: ' attent',
						logprob: -16,
						prob: 1.1253517471925912e-7
					},
					{
						token: ' notice',
						logprob: -16.625,
						prob: 6.023573837886479e-8
					},
					{
						token: 'attention',
						logprob: -16.875,
						prob: 4.691164021834418e-8
					},
					{
						token: ' awareness',
						logprob: -18.125,
						prob: 1.3440409951135022e-8
					}
				]
			},
			{
				token: '!',
				logprob: -0.4329971671104431,
				prob: 0.6485623291078227,
				gini: 0.49027274365597634,
				opacity: {
					prob: 0.6485623291078227,
					gini: 0.49027274365597634
				},
				top: [
					{
						token: '!',
						logprob: -0.4329971671104431,
						prob: 0.6485623291078227
					},
					{
						token: ',',
						logprob: -1.432997226715088,
						prob: 0.2385927329757994
					},
					{
						token: '.',
						logprob: -2.182997226715088,
						prob: 0.11270322678483577
					},
					{
						token: ';',
						logprob: -9.05799674987793,
						prob: 0.00011645603363529083
					},
					{
						token: ' and',
						logprob: -11.18299674987793,
						prob: 0.000013908689769631721
					}
				]
			}
		]
	},
	{ role: 'user', text: 'Which bug was fixed in tensorFlow 2.15.11?' },
	{
		role: 'assistant',
		tokens: [
			{
				token: 'In',
				logprob: -0.6450931429862976,
				prob: 0.5246136757464372,
				gini: 0.40037240301783067,
				opacity: {
					prob: 0.5246136757464372,
					gini: 0.40037240301783067
				},
				top: [
					{
						token: 'In',
						logprob: -0.6450931429862976,
						prob: 0.5246136757464372
					},
					{
						token: 'As',
						logprob: -1.1450932025909424,
						prob: 0.31819425987889977
					},
					{
						token: 'Tensor',
						logprob: -1.8950932025909424,
						prob: 0.15030432564097443
					},
					{
						token: 'I',
						logprob: -5.770092964172363,
						prob: 0.003119467501970296
					},
					{
						token: 'The',
						logprob: -6.145092964172363,
						prob: 0.00214397656964104
					}
				]
			},
			{
				token: ' Tensor',
				logprob: -0.00034821697045117617,
				prob: 0.9996518436500416,
				gini: 0.999312619977188,
				opacity: {
					prob: 0.9996518436500416,
					gini: 0.999312619977188
				},
				top: [
					{
						token: ' Tensor',
						logprob: -0.00034821697045117617,
						prob: 0.9996518436500416
					},
					{
						token: ' the',
						logprob: -8.250348091125488,
						prob: 0.00026116763134259076
					},
					{
						token: ' version',
						logprob: -9.500348091125488,
						prob: 0.00007482577916426599
					},
					{
						token: ' **',
						logprob: -11.875348091125488,
						prob: 0.000006959881628754107
					},
					{
						token: ' release',
						logprob: -14.000348091125488,
						prob: 8.312393217071141e-7
					}
				]
			},
			{
				token: 'Flow',
				logprob: -0.0000010280383548888494,
				prob: 0.9999989719621736,
				gini: 0.9999981079477467,
				opacity: {
					prob: 0.9996518436500416,
					gini: 0.999312619977188
				},
				top: [
					{
						token: 'Flow',
						logprob: -0.0000010280383548888494,
						prob: 0.9999989719621736
					},
					{
						token: 'flow',
						logprob: -13.875000953674316,
						prob: 9.422445831379603e-7
					},
					{
						token: 'Board',
						logprob: -20.125001907348633,
						prob: 1.8189582181622667e-9
					},
					{
						token: ' Flow',
						logprob: -20.250001907348633,
						prob: 1.6052249934589952e-9
					},
					{
						token: 'Flows',
						logprob: -21.750001907348633,
						prob: 3.581741098647678e-10
					}
				]
			},
			{
				token: ' ',
				logprob: -0.16042082011699677,
				prob: 0.8517852651595466,
				gini: 0.747475438863757,
				opacity: {
					prob: 0.8517852651595466,
					gini: 0.747475438863757
				},
				top: [
					{
						token: ' ',
						logprob: -0.16042082011699677,
						prob: 0.8517852651595466
					},
					{
						token: ' version',
						logprob: -1.9104207754135132,
						prob: 0.1480180911166816
					},
					{
						token: ' release',
						logprob: -9.410420417785645,
						prob: 0.00008186652197349903
					},
					{
						token: ' versions',
						logprob: -9.410420417785645,
						prob: 0.00008186652197349903
					},
					{
						token: ' v',
						logprob: -11.160420417785645,
						prob: 0.000014226268359907442
					}
				]
			},
			{
				token: '2',
				logprob: 0,
				prob: 1,
				gini: 0.9999999881121164,
				opacity: {
					prob: 1,
					gini: 0.9999999881121164
				},
				top: [
					{
						token: '2',
						logprob: 0,
						prob: 1
					},
					{
						token: ' ',
						logprob: -19.125,
						prob: 4.944450501938644e-9
					},
					{
						token: '202',
						logprob: -21.25,
						prob: 5.905303998944039e-10
					},
					{
						token: '²',
						logprob: -22.25,
						prob: 2.172439935079017e-10
					},
					{
						token: '₂',
						logprob: -22.375,
						prob: 1.917171513758312e-10
					}
				]
			},
			{
				token: '.',
				logprob: 0,
				prob: 1,
				gini: 0.9999999971892981,
				opacity: {
					prob: 1,
					gini: 0.9999999971892981
				},
				top: [
					{
						token: '.',
						logprob: 0,
						prob: 1
					},
					{
						token: '.x',
						logprob: -20.5,
						prob: 1.2501528663867426e-9
					},
					{
						token: ',',
						logprob: -22.75,
						prob: 1.3176514270095466e-10
					},
					{
						token: '.\n\n',
						logprob: -25,
						prob: 1.3887943864964021e-11
					},
					{
						token: ' version',
						logprob: -25.375,
						prob: 9.545034922840628e-12
					}
				]
			},
			{
				token: '15',
				logprob: -1.9361264946837764e-7,
				prob: 0.9999998063873693,
				gini: 0.9999996202815177,
				opacity: {
					prob: 0.9999998063873693,
					gini: 0.9999996202815177
				},
				top: [
					{
						token: '15',
						logprob: -1.9361264946837764e-7,
						prob: 0.9999998063873693
					},
					{
						token: '11',
						logprob: -16.125,
						prob: 9.931194312156244e-8
					},
					{
						token: '14',
						logprob: -16.75,
						prob: 5.3157852544244216e-8
					},
					{
						token: '13',
						logprob: -17.625,
						prob: 2.215948977336598e-8
					},
					{
						token: '5',
						logprob: -18,
						prob: 1.522997974471263e-8
					}
				]
			},
			{
				token: '.',
				logprob: -0.0003559615579433739,
				prob: 0.9996441017888554,
				gini: 0.9992899540183428,
				opacity: {
					prob: 0.9996441017888554,
					gini: 0.9992899540183428
				},
				top: [
					{
						token: '.',
						logprob: -0.0003559615579433739,
						prob: 0.9996441017888554
					},
					{
						token: ',',
						logprob: -8.37535572052002,
						prob: 0.00023047786730190367
					},
					{
						token: '.x',
						logprob: -9.00035572052002,
						prob: 0.00012336591249402723
					},
					{
						token: ' and',
						logprob: -14.00035572052002,
						prob: 8.312329798785711e-7
					},
					{
						token: ' release',
						logprob: -14.62535572052002,
						prob: 4.449269522419011e-7
					}
				]
			},
			{
				token: '1',
				logprob: -0.958107590675354,
				prob: 0.38361816208606225,
				gini: 0.3484718994585875,
				opacity: {
					prob: 0.38361816208606225,
					gini: 0.3484718994585875
				},
				top: [
					{
						token: '1',
						logprob: -0.958107590675354,
						prob: 0.38361816208606225
					},
					{
						token: '11',
						logprob: -0.958107590675354,
						prob: 0.38361816208606225
					},
					{
						token: '0',
						logprob: -1.458107590675354,
						prob: 0.2326761769278073
					},
					{
						token: '2',
						logprob: -9.708107948303223,
						prob: 0.00006078862056291777
					},
					{
						token: '3',
						logprob: -11.083107948303223,
						prob: 0.00001536977025265623
					}
				]
			},
			{
				token: ',',
				logprob: -0.008060702122747898,
				prob: 0.991971698221653,
				gini: 0.9841838716250076,
				opacity: {
					prob: 0.991971698221653,
					gini: 0.9841838716250076
				},
				top: [
					{
						token: ',',
						logprob: -0.008060702122747898,
						prob: 0.991971698221653
					},
					{
						token: ' (',
						logprob: -4.883060932159424,
						prob: 0.0075737956361138685
					},
					{
						token: ' and',
						logprob: -8.133060455322266,
						prob: 0.0002936680661014811
					},
					{
						token: ' release',
						logprob: -9.633060455322266,
						prob: 0.00006552620261970314
					},
					{
						token: ' released',
						logprob: -10.258060455322266,
						prob: 0.000035073648819647105
					}
				]
			},
			{
				token: ' there',
				logprob: -3.4382357597351074,
				prob: 0.032121305067523594,
				gini: 0.4509900444775191,
				opacity: {
					prob: 0.032121305067523594,
					gini: 0.4509900444775191
				},
				top: [
					{
						token: ' a',
						logprob: -0.5632356405258179,
						prob: 0.5693638235301636
					},
					{
						token: ' several',
						logprob: -1.3132356405258179,
						prob: 0.2689484265763868
					},
					{
						token: ' one',
						logprob: -3.0632357597351074,
						prob: 0.04673622309957895
					},
					{
						token: ' there',
						logprob: -3.4382357597351074,
						prob: 0.032121305067523594
					},
					{
						token: ' the',
						logprob: -3.6882357597351074,
						prob: 0.025016097539862857
					}
				]
			},
			{
				token: ' was',
				logprob: -0.5803070068359375,
				prob: 0.5597265003228418,
				gini: 0.5037941554201347,
				opacity: {
					prob: 0.5597265003228418,
					gini: 0.5037941554201347
				},
				top: [
					{
						token: ' was',
						logprob: -0.5803070068359375,
						prob: 0.5597265003228418
					},
					{
						token: ' were',
						logprob: -0.8303070068359375,
						prob: 0.43591543675724614
					},
					{
						token: ' are',
						logprob: -5.8303070068359375,
						prob: 0.0029371751089535174
					},
					{
						token: ' is',
						logprob: -7.2053070068359375,
						prob: 0.0007426341673555696
					},
					{
						token: " wasn't",
						logprob: -8.455307006835938,
						prob: 0.00021276825125964385
					}
				]
			},
			{
				token: ' a',
				logprob: -0.016691794618964195,
				prob: 0.9834467415083261,
				gini: 0.9679225186015573,
				opacity: {
					prob: 0.9834467415083261,
					gini: 0.9679225186015573
				},
				top: [
					{
						token: ' a',
						logprob: -0.016691794618964195,
						prob: 0.9834467415083261
					},
					{
						token: ' an',
						logprob: -4.1416916847229,
						prob: 0.015895937831020095
					},
					{
						token: ' no',
						logprob: -8.641692161560059,
						prob: 0.0001765878341332561
					},
					{
						token: ' indeed',
						logprob: -8.641692161560059,
						prob: 0.0001765878341332561
					},
					{
						token: ' specifically',
						logprob: -10.016692161560059,
						prob: 0.00004464839660628808
					}
				]
			},
			{
				token: ' bug',
				logprob: -1.261691927909851,
				prob: 0.2831745101035702,
				gini: 0.23435898306006733,
				opacity: {
					prob: 0.2831745101035702,
					gini: 0.23435898306006733
				},
				top: [
					{
						token: ' bug',
						logprob: -1.261691927909851,
						prob: 0.2831745101035702
					},
					{
						token: ' specific',
						logprob: -1.511691927909851,
						prob: 0.2205365302145219
					},
					{
						token: ' fix',
						logprob: -1.511691927909851,
						prob: 0.2205365302145219
					},
					{
						token: ' notable',
						logprob: -1.761691927909851,
						prob: 0.1717540224269202
					},
					{
						token: ' significant',
						logprob: -3.0116920471191406,
						prob: 0.04920834543925306
					}
				]
			},
			{
				token: ' related',
				logprob: -2.9534618854522705,
				prob: 0.05215882515677341,
				gini: 0.8621294097647363,
				opacity: {
					prob: 0.05215882515677341,
					gini: 0.8621294097647363
				},
				top: [
					{
						token: ' fix',
						logprob: -0.07846181094646454,
						prob: 0.9245373664643708
					},
					{
						token: ' related',
						logprob: -2.9534618854522705,
						prob: 0.05215882515677341
					},
					{
						token: ' fixed',
						logprob: -4.453461647033691,
						prob: 0.01163820978514991
					},
					{
						token: ' that',
						logprob: -4.953461647033691,
						prob: 0.007058931058861001
					},
					{
						token: 'fix',
						logprob: -6.203461647033691,
						prob: 0.0020224176090690577
					}
				]
			},
			{
				token: ' to',
				logprob: -0.00026896485360339284,
				prob: 0.9997310713142001,
				gini: 0.9994678433062312,
				opacity: {
					prob: 0.9997310713142001,
					gini: 0.9994678433062312
				},
				top: [
					{
						token: ' to',
						logprob: -0.00026896485360339284,
						prob: 0.9997310713142001
					},
					{
						token: ' specifically',
						logprob: -8.250268936157227,
						prob: 0.00026118830487635635
					},
					{
						token: ' primarily',
						logprob: -12.750268936157227,
						prob: 0.0000029015399747008186
					},
					{
						token: ' issue',
						logprob: -13.375268936157227,
						prob: 0.000001553082431763315
					},
					{
						token: ' with',
						logprob: -14.500268936157227,
						prob: 5.042120434828661e-7
					}
				]
			},
			{
				token: ' the',
				logprob: -0.4455249607563019,
				prob: 0.6404879567206601,
				gini: 0.5803124677509661,
				opacity: {
					prob: 0.6404879567206601,
					gini: 0.5803124677509661
				},
				top: [
					{
						token: ' the',
						logprob: -0.4455249607563019,
						prob: 0.6404879567206601
					},
					{
						token: ' `',
						logprob: -1.9455249309539795,
						prob: 0.1429121846153364
					},
					{
						token: ' a',
						logprob: -3.0705249309539795,
						prob: 0.04639679335094095
					},
					{
						token: ' "',
						logprob: -3.9455249309539795,
						prob: 0.019341060982879636
					},
					{
						token: ' an',
						logprob: -4.195525169372559,
						prob: 0.015062829847639538
					}
				]
			},
			{
				token: ' compatibility',
				logprob: -4.274816989898682,
				prob: 0.013914594997373454,
				gini: 0.56679361164818,
				opacity: {
					prob: 0.013914594997373454,
					gini: 0.56679361164818
				},
				top: [
					{
						token: ' `',
						logprob: -0.5248168706893921,
						prob: 0.5916637054127858
					},
					{
						token: ' handling',
						logprob: -2.1498169898986816,
						prob: 0.11650547750181639
					},
					{
						token: ' use',
						logprob: -3.3998169898986816,
						prob: 0.03337937816475735
					},
					{
						token: ' behavior',
						logprob: -3.3998169898986816,
						prob: 0.03337937816475735
					},
					{
						token: ' "',
						logprob: -3.5248169898986816,
						prob: 0.029457197840598238
					}
				]
			},
			{
				token: ' of',
				logprob: -0.1323106437921524,
				prob: 0.8760688074683279,
				gini: 0.7811403304680754,
				opacity: {
					prob: 0.8760688074683279,
					gini: 0.7811403304680754
				},
				top: [
					{
						token: ' of',
						logprob: -0.1323106437921524,
						prob: 0.8760688074683279
					},
					{
						token: ' with',
						logprob: -3.007310628890991,
						prob: 0.0494244207935223
					},
					{
						token: ' between',
						logprob: -3.007310628890991,
						prob: 0.0494244207935223
					},
					{
						token: ' and',
						logprob: -4.00731086730957,
						prob: 0.018182223966762678
					},
					{
						token: ' issue',
						logprob: -6.50731086730957,
						prob: 0.0014924878292911343
					}
				]
			},
			{
				token: ' the',
				logprob: -0.9933987855911255,
				prob: 0.3703159252685103,
				gini: 0.28513886766020813,
				opacity: {
					prob: 0.3703159252685103,
					gini: 0.28513886766020813
				},
				top: [
					{
						token: ' the',
						logprob: -0.9933987855911255,
						prob: 0.3703159252685103
					},
					{
						token: ' Tensor',
						logprob: -1.6183987855911255,
						prob: 0.19821583116255448
					},
					{
						token: ' `',
						logprob: -1.7433987855911255,
						prob: 0.17492485704418542
					},
					{
						token: ' certain',
						logprob: -2.243398666381836,
						prob: 0.10609730159093107
					},
					{
						token: ' K',
						logprob: -3.618398666381836,
						prob: 0.0268255988502253
					}
				]
			},
			{
				token: ' K',
				logprob: -3.1889662742614746,
				prob: 0.041214453367244774,
				gini: 0.6537799672095046,
				opacity: {
					prob: 0.041214453367244774,
					gini: 0.6537799672095046
				},
				top: [
					{
						token: ' `',
						logprob: -0.3139663338661194,
						prob: 0.7305436223248221
					},
					{
						token: ' Tensor',
						logprob: -2.0639662742614746,
						prob: 0.12694945368073385
					},
					{
						token: ' K',
						logprob: -3.1889662742614746,
						prob: 0.041214453367244774
					},
					{
						token: ' library',
						logprob: -4.438966274261475,
						prob: 0.011808138589686244
					},
					{
						token: ' "',
						logprob: -4.813966274261475,
						prob: 0.008115607055169305
					}
				]
			},
			{
				token: 'eras',
				logprob: -0.00000877627644513268,
				prob: 0.9999912237620663,
				gini: 0.9999860685579367,
				opacity: {
					prob: 0.041214453367244774,
					gini: 0.6537799672095046
				},
				top: [
					{
						token: 'eras',
						logprob: -0.00000877627644513268,
						prob: 0.9999912237620663
					},
					{
						token: 'Means',
						logprob: -12.125008583068848,
						prob: 0.000005422201831302804
					},
					{
						token: 'Fold',
						logprob: -14.125008583068848,
						prob: 7.33815220605445e-7
					},
					{
						token: 'era',
						logprob: -14.375008583068848,
						prob: 5.714958684372363e-7
					},
					{
						token: 'NN',
						logprob: -15.250008583068848,
						prob: 2.3823492195466944e-7
					}
				]
			},
			{
				token: ' `',
				logprob: -0.655344545841217,
				prob: 0.5192631218130506,
				gini: 0.48104699604933426,
				opacity: {
					prob: 0.5192631218130506,
					gini: 0.48104699604933426
				},
				top: [
					{
						token: ' `',
						logprob: -0.655344545841217,
						prob: 0.5192631218130506
					},
					{
						token: ' API',
						logprob: -1.9053444862365723,
						prob: 0.1487713840995014
					},
					{
						token: ' model',
						logprob: -2.7803444862365723,
						prob: 0.062017139646085295
					},
					{
						token: ' layers',
						logprob: -3.4053444862365723,
						prob: 0.03319538275962532
					},
					{
						token: ' preprocessing',
						logprob: -3.7803444862365723,
						prob: 0.02281483067605316
					}
				]
			},
			{
				token: 'multi',
				logprob: -9999,
				prob: 0,
				gini: 0.235205087898705,
				opacity: {
					prob: 0,
					gini: 0.235205087898705
				},
				top: [
					{
						token: 'Model',
						logprob: -1.451561450958252,
						prob: 0.23420430390022076
					},
					{
						token: 'fit',
						logprob: -1.451561450958252,
						prob: 0.23420430390022076
					},
					{
						token: 'model',
						logprob: -1.701561450958252,
						prob: 0.1823984952761852
					},
					{
						token: 'tf',
						logprob: -2.076561450958252,
						prob: 0.1253605302709279
					},
					{
						token: 'Sequential',
						logprob: -2.951561450958252,
						prob: 0.05225804383670779
					}
				]
			},
			{
				token: '_worker',
				logprob: -0.26137781143188477,
				prob: 0.7699899536464816,
				gini: 0.6316492075923487,
				opacity: {
					prob: 0,
					gini: 0.235205087898705
				},
				top: [
					{
						token: '_worker',
						logprob: -0.26137781143188477,
						prob: 0.7699899536464816
					},
					{
						token: '_gpu',
						logprob: -2.0113778114318848,
						prob: 0.13380419066237453
					},
					{
						token: '-worker',
						logprob: -3.0113778114318848,
						prob: 0.04922381088727147
					},
					{
						token: '_head',
						logprob: -3.5113778114318848,
						prob: 0.02985575049102667
					},
					{
						token: 'worker',
						logprob: -5.761377811431885,
						prob: 0.0031467729504667118
					}
				]
			},
			{
				token: '`',
				logprob: -0.3749995827674866,
				prob: 0.6872895655504653,
				gini: 0.6417866439727946,
				opacity: {
					prob: 0.6872895655504653,
					gini: 0.6417866439727946
				},
				top: [
					{
						token: '`',
						logprob: -0.3749995827674866,
						prob: 0.6872895655504653
					},
					{
						token: '_dataset',
						logprob: -2.624999523162842,
						prob: 0.07243979157622758
					},
					{
						token: '_model',
						logprob: -2.999999523162842,
						prob: 0.0497870921081938
					},
					{
						token: '_test',
						logprob: -3.499999523162842,
						prob: 0.03019739782155643
					},
					{
						token: '_m',
						logprob: -3.624999523162842,
						prob: 0.02664911004363836
					}
				]
			},
			{
				token: ' training',
				logprob: -0.5965461134910583,
				prob: 0.5507104464499897,
				gini: 0.47980913771685,
				opacity: {
					prob: 0.5507104464499897,
					gini: 0.47980913771685
				},
				top: [
					{
						token: ' training',
						logprob: -0.5965461134910583,
						prob: 0.5507104464499897
					},
					{
						token: ' strategy',
						logprob: -1.0965461730957031,
						prob: 0.3340227504866431
					},
					{
						token: ' API',
						logprob: -3.721546173095703,
						prob: 0.024196526889164828
					},
					{
						token: ' and',
						logprob: -4.346546173095703,
						prob: 0.012951467547892524
					},
					{
						token: ' distribution',
						logprob: -4.721546173095703,
						prob: 0.008901404790275734
					}
				]
			},
			{
				token: ' strategy',
				logprob: -1.1136493682861328,
				prob: 0.32835847090194603,
				gini: 0.3036565503479427,
				opacity: {
					prob: 0.32835847090194603,
					gini: 0.3036565503479427
				},
				top: [
					{
						token: ' strategy',
						logprob: -1.1136493682861328,
						prob: 0.32835847090194603
					},
					{
						token: ' with',
						logprob: -1.7386493682861328,
						prob: 0.17575762420128693
					},
					{
						token: ' API',
						logprob: -2.363649368286133,
						prob: 0.09407627700308469
					},
					{
						token: '.',
						logprob: -2.863649368286133,
						prob: 0.0570601463539894
					},
					{
						token: ' setup',
						logprob: -2.863649368286133,
						prob: 0.0570601463539894
					}
				]
			},
			{
				token: ',',
				logprob: -2.3062610626220703,
				prob: 0.09963307784771862,
				gini: 0.21731736162438856,
				opacity: {
					prob: 0.09963307784771862,
					gini: 0.21731736162438856
				},
				top: [
					{
						token: ' with',
						logprob: -1.4312610626220703,
						prob: 0.23900732891079277
					},
					{
						token: '.',
						logprob: -1.6812610626220703,
						prob: 0.1861390949155302
					},
					{
						token: ' that',
						logprob: -1.8062610626220703,
						prob: 0.16426717471285543
					},
					{
						token: ' when',
						logprob: -2.0562610626220703,
						prob: 0.12793140429929908
					},
					{
						token: ',',
						logprob: -2.3062610626220703,
						prob: 0.09963307784771862
					}
				]
			},
			{
				token: ' which',
				logprob: -1.572918176651001,
				prob: 0.20743895473336832,
				gini: 0.3543743701278587,
				opacity: {
					prob: 0.20743895473336832,
					gini: 0.3543743701278587
				},
				top: [
					{
						token: ' specifically',
						logprob: -0.6979182362556458,
						prob: 0.4976201538557631
					},
					{
						token: ' which',
						logprob: -1.572918176651001,
						prob: 0.20743895473336832
					},
					{
						token: ' particularly',
						logprob: -1.572918176651001,
						prob: 0.20743895473336832
					},
					{
						token: ' where',
						logprob: -3.072918176651001,
						prob: 0.04628588719067936
					},
					{
						token: ' especially',
						logprob: -4.19791841506958,
						prob: 0.01502682389764986
					}
				]
			},
			{
				token: ' caused',
				logprob: -1.6608132123947144,
				prob: 0.1899844195799673,
				gini: 0.27531672243807825,
				opacity: {
					prob: 0.1899844195799673,
					gini: 0.27531672243807825
				},
				top: [
					{
						token: ' was',
						logprob: -1.1608132123947144,
						prob: 0.31323135366311
					},
					{
						token: ' could',
						logprob: -1.4108132123947144,
						prob: 0.24394482351534624
					},
					{
						token: ' caused',
						logprob: -1.6608132123947144,
						prob: 0.1899844195799673
					},
					{
						token: ' affected',
						logprob: -2.410813331604004,
						prob: 0.08974227465337825
					},
					{
						token: ' had',
						logprob: -3.910813331604004,
						prob: 0.020024208115492666
					}
				]
			},
			{
				token: ' an',
				logprob: -2.8038690090179443,
				prob: 0.060575242498057014,
				gini: 0.7238737592908748,
				opacity: {
					prob: 0.060575242498057014,
					gini: 0.7238737592908748
				},
				top: [
					{
						token: ' issues',
						logprob: -0.3038689196109772,
						prob: 0.7379575918792751
					},
					{
						token: ' an',
						logprob: -2.8038690090179443,
						prob: 0.060575242498057014
					},
					{
						token: ' errors',
						logprob: -3.5538690090179443,
						prob: 0.0286137184802582
					},
					{
						token: ' a',
						logprob: -3.8038690090179443,
						prob: 0.022284386359009818
					},
					{
						token: ' some',
						logprob: -3.8038690090179443,
						prob: 0.022284386359009818
					}
				]
			},
			{
				token: ' error',
				logprob: -1.4809504747390747,
				prob: 0.22742142730297066,
				gini: 0.5756008970450712,
				opacity: {
					prob: 0.22742142730297066,
					gini: 0.5756008970450712
				},
				top: [
					{
						token: ' issue',
						logprob: -0.3559504747390747,
						prob: 0.7005073121835974
					},
					{
						token: ' error',
						logprob: -1.4809504747390747,
						prob: 0.22742142730297066
					},
					{
						token: ' assertion',
						logprob: -3.855950355529785,
						prob: 0.021153490417838268
					},
					{
						token: ' `',
						logprob: -4.230950355529785,
						prob: 0.014538567173187805
					},
					{
						token: ' exception',
						logprob: -4.855950355529785,
						prob: 0.007781934233739802
					}
				]
			},
			{
				token: ' when',
				logprob: -0.29197490215301514,
				prob: 0.7467872784910035,
				gini: 0.6315343871140758,
				opacity: {
					prob: 0.7467872784910035,
					gini: 0.6315343871140758
				},
				top: [
					{
						token: ' when',
						logprob: -0.29197490215301514,
						prob: 0.7467872784910035
					},
					{
						token: ' in',
						logprob: -2.4169750213623047,
						prob: 0.08919101070160829
					},
					{
						token: ' during',
						logprob: -2.5419750213623047,
						prob: 0.0787107906825588
					},
					{
						token: ' with',
						logprob: -3.9169750213623047,
						prob: 0.01990120450165017
					},
					{
						token: ' message',
						logprob: -4.041975021362305,
						prob: 0.017562751330408886
					}
				]
			},
			{
				token: ' running',
				logprob: -2.611473798751831,
				prob: 0.07342624846658122,
				gini: 0.5195505796694818,
				opacity: {
					prob: 0.07342624846658122,
					gini: 0.5195505796694818
				},
				top: [
					{
						token: ' using',
						logprob: -0.6114738583564758,
						prob: 0.5425506367150502
					},
					{
						token: ' running',
						logprob: -2.611473798751831,
						prob: 0.07342624846658122
					},
					{
						token: ' trying',
						logprob: -2.736473798751831,
						prob: 0.06479843684016481
					},
					{
						token: ' the',
						logprob: -3.111473798751831,
						prob: 0.04453527092265924
					},
					{
						token: ' attempting',
						logprob: -3.111473798751831,
						prob: 0.04453527092265924
					}
				]
			},
			{
				token: ' on',
				logprob: -2.453042507171631,
				prob: 0.0860314366422141,
				gini: 0.32167891226486234,
				opacity: {
					prob: 0.0860314366422141,
					gini: 0.32167891226486234
				},
				top: [
					{
						token: ' distributed',
						logprob: -1.0780426263809204,
						prob: 0.3402608919407758
					},
					{
						token: ' certain',
						logprob: -1.3280426263809204,
						prob: 0.26499544909205086
					},
					{
						token: ' on',
						logprob: -2.453042507171631,
						prob: 0.0860314366422141
					},
					{
						token: ' with',
						logprob: -2.953042507171631,
						prob: 0.05218070402262775
					},
					{
						token: ' the',
						logprob: -3.203042507171631,
						prob: 0.040638373154039696
					}
				]
			},
			{
				token: ' multiple',
				logprob: -1.5159142017364502,
				prob: 0.21960732764947677,
				gini: 0.37912298633356994,
				opacity: {
					prob: 0.21960732764947677,
					gini: 0.37912298633356994
				},
				top: [
					{
						token: ' certain',
						logprob: -0.8909141421318054,
						prob: 0.41028052655825276
					},
					{
						token: ' multiple',
						logprob: -1.5159142017364502,
						prob: 0.21960732764947677
					},
					{
						token: ' a',
						logprob: -2.51591420173645,
						prob: 0.08078902097284335
					},
					{
						token: ' specific',
						logprob: -3.51591420173645,
						prob: 0.029720619888277542
					},
					{
						token: ' TPU',
						logprob: -3.51591420173645,
						prob: 0.029720619888277542
					}
				]
			},
			{
				token: ' workers',
				logprob: -0.3360069692134857,
				prob: 0.7146181254724256,
				gini: 0.5722611517415359,
				opacity: {
					prob: 0.7146181254724256,
					gini: 0.5722611517415359
				},
				top: [
					{
						token: ' workers',
						logprob: -0.3360069692134857,
						prob: 0.7146181254724256
					},
					{
						token: ' GPUs',
						logprob: -1.586006999015808,
						prob: 0.20474151476931443
					},
					{
						token: ' devices',
						logprob: -3.2110068798065186,
						prob: 0.040315999463111304
					},
					{
						token: ' machines',
						logprob: -4.086007118225098,
						prob: 0.016806204954638256
					},
					{
						token: ' TPU',
						logprob: -4.836007118225098,
						prob: 0.007938689099081435
					}
				]
			},
			{
				token: '.',
				logprob: -0.3504573404788971,
				prob: 0.7043658810154458,
				gini: 0.5671973702407804,
				opacity: {
					prob: 0.7043658810154458,
					gini: 0.5671973702407804
				},
				top: [
					{
						token: '.',
						logprob: -0.3504573404788971,
						prob: 0.7043658810154458
					},
					{
						token: ' with',
						logprob: -1.6004573106765747,
						prob: 0.20180420966981316
					},
					{
						token: ' in',
						logprob: -3.2254574298858643,
						prob: 0.03973760025224995
					},
					{
						token: ' using',
						logprob: -3.9754574298858643,
						prob: 0.018770713245355786
					},
					{
						token: ' due',
						logprob: -4.600457191467285,
						prob: 0.01004724118147815
					}
				]
			},
			{
				token: ' Specifically',
				logprob: -1.735309362411499,
				prob: 0.17634563713531964,
				gini: 0.32109845700586803,
				opacity: {
					prob: 0.17634563713531964,
					gini: 0.32109845700586803
				},
				top: [
					{
						token: ' This',
						logprob: -0.9853094220161438,
						prob: 0.37332369449321756
					},
					{
						token: ' The',
						logprob: -1.110309362411499,
						prob: 0.32945702368887053
					},
					{
						token: ' Specifically',
						logprob: -1.735309362411499,
						prob: 0.17634563713531964
					},
					{
						token: ' Additionally',
						logprob: -3.360309362411499,
						prob: 0.034724514823266724
					},
					{
						token: ' However',
						logprob: -3.860309362411499,
						prob: 0.021061482883957088
					}
				]
			},
			{
				token: ',',
				logprob: -0.000020339031834737398,
				prob: 0.9999796611750019,
				gini: 0.9999720537387884,
				opacity: {
					prob: 0.9999796611750019,
					gini: 0.9999720537387884
				},
				top: [
					{
						token: ',',
						logprob: -0.000020339031834737398,
						prob: 0.9999796611750019
					},
					{
						token: ':\n\n',
						logprob: -11.375020027160645,
						prob: 0.00001147867000324042
					},
					{
						token: ':',
						logprob: -14.000020027160645,
						prob: 8.315120661110865e-7
					},
					{
						token: ' the',
						logprob: -14.000020027160645,
						prob: 8.315120661110865e-7
					},
					{
						token: ' for',
						logprob: -14.000020027160645,
						prob: 8.315120661110865e-7
					}
				]
			},
			{
				token: ' the',
				logprob: -0.8163385391235352,
				prob: 0.4420472336627567,
				gini: 0.35393941600124357,
				opacity: {
					prob: 0.4420472336627567,
					gini: 0.35393941600124357
				},
				top: [
					{
						token: ' the',
						logprob: -0.8163385391235352,
						prob: 0.4420472336627567
					},
					{
						token: ' it',
						logprob: -1.1913385391235352,
						prob: 0.30381432441562045
					},
					{
						token: ' this',
						logprob: -1.8163385391235352,
						prob: 0.16262008929123692
					},
					{
						token: ' there',
						logprob: -3.941338539123535,
						prob: 0.01942219996385141
					},
					{
						token: ' a',
						logprob: -4.191338539123535,
						prob: 0.01512602454081689
					}
				]
			},
			{
				token: ' issue',
				logprob: -0.9110629558563232,
				prob: 0.40209658587289593,
				gini: 0.32376531224060295,
				opacity: {
					prob: 0.40209658587289593,
					gini: 0.32376531224060295
				},
				top: [
					{
						token: ' issue',
						logprob: -0.9110629558563232,
						prob: 0.40209658587289593
					},
					{
						token: ' fix',
						logprob: -1.1610629558563232,
						prob: 0.31315313594814975
					},
					{
						token: ' bug',
						logprob: -1.5360629558563232,
						prob: 0.21522679295693511
					},
					{
						token: ' error',
						logprob: -3.4110629558563232,
						prob: 0.033006097698051066
					},
					{
						token: ' `',
						logprob: -4.536063194274902,
						prob: 0.01071550850076641
					}
				]
			},
			{
				token: ' arose',
				logprob: -3.4567484855651855,
				prob: 0.031532122666633244,
				gini: 0.47623456754356924,
				opacity: {
					prob: 0.031532122666633244,
					gini: 0.47623456754356924
				},
				top: [
					{
						token: ' was',
						logprob: -0.581748366355896,
						prob: 0.5589203143445178
					},
					{
						token: ' involved',
						logprob: -1.206748366355896,
						prob: 0.2991684858843297
					},
					{
						token: ' arose',
						logprob: -3.4567484855651855,
						prob: 0.031532122666633244
					},
					{
						token: ' affected',
						logprob: -3.9567484855651855,
						prob: 0.019125199163132742
					},
					{
						token: ' occurred',
						logprob: -4.4567484855651855,
						prob: 0.011600019665550406
					}
				]
			},
			{
				token: ' due',
				logprob: -3.525257110595703,
				prob: 0.029444235970755163,
				gini: 0.5110870524190158,
				opacity: {
					prob: 0.029444235970755163,
					gini: 0.5110870524190158
				},
				top: [
					{
						token: ' when',
						logprob: -0.40025708079338074,
						prob: 0.6701477417753924
					},
					{
						token: ' from',
						logprob: -2.400257110595703,
						prob: 0.09069463174063841
					},
					{
						token: ' in',
						logprob: -2.525257110595703,
						prob: 0.08003773159216393
					},
					{
						token: ' with',
						logprob: -2.650257110595703,
						prob: 0.0706330502199819
					},
					{
						token: ' during',
						logprob: -3.025257110595703,
						prob: 0.04854533814449787
					}
				]
			},
			{
				token: ' to',
				logprob: -0.000002339278580620885,
				prob: 0.9999976607241555,
				gini: 0.9999967684788889,
				opacity: {
					prob: 0.9999976607241555,
					gini: 0.9999967684788889
				},
				top: [
					{
						token: ' to',
						logprob: -0.000002339278580620885,
						prob: 0.9999976607241555
					},
					{
						token: ' a',
						logprob: -14.375001907348633,
						prob: 5.714996835964924e-7
					},
					{
						token: ' in',
						logprob: -14.500001907348633,
						prob: 5.043467006019808e-7
					},
					{
						token: ',',
						logprob: -15.125001907348633,
						prob: 2.6995733543305574e-7
					},
					{
						token: ' the',
						logprob: -15.125001907348633,
						prob: 2.6995733543305574e-7
					}
				]
			},
			{
				token: ' a',
				logprob: -1.633030652999878,
				prob: 0.19533667845963826,
				gini: 0.28388767513139707,
				opacity: {
					prob: 0.19533667845963826,
					gini: 0.28388767513139707
				},
				top: [
					{
						token: ' the',
						logprob: -1.008030652999878,
						prob: 0.36493695987045704
					},
					{
						token: ' a',
						logprob: -1.633030652999878,
						prob: 0.19533667845963826
					},
					{
						token: ' an',
						logprob: -2.008030652999878,
						prob: 0.1342528048599488
					},
					{
						token: ' improper',
						logprob: -2.508030652999878,
						prob: 0.0814284422999762
					},
					{
						token: ' incorrect',
						logprob: -2.758030652999878,
						prob: 0.06341653462750617
					}
				]
			},
			{
				token: ' failure',
				logprob: -1.7090686559677124,
				prob: 0.1810343193597273,
				gini: 0.2199107711305917,
				opacity: {
					prob: 0.1810343193597273,
					gini: 0.2199107711305917
				},
				top: [
					{
						token: ' problem',
						logprob: -1.7090686559677124,
						prob: 0.1810343193597273
					},
					{
						token: ' failure',
						logprob: -1.7090686559677124,
						prob: 0.1810343193597273
					},
					{
						token: ' missing',
						logprob: -2.084068775177002,
						prob: 0.12442293195679131
					},
					{
						token: ' mismatch',
						logprob: -2.084068775177002,
						prob: 0.12442293195679131
					},
					{
						token: ' mis',
						logprob: -2.709068775177002,
						prob: 0.06659879629971324
					}
				]
			},
			{
				token: ' sequence',
				logprob: -9999,
				prob: 0,
				gini: 0.5754676906960848,
				opacity: {
					prob: 0,
					gini: 0.5754676906960848
				},
				top: [
					{
						token: ' in',
						logprob: -0.333841472864151,
						prob: 0.7161673051804154
					},
					{
						token: ' to',
						logprob: -1.4588414430618286,
						prob: 0.23250548959740555
					},
					{
						token: ' when',
						logprob: -3.208841562271118,
						prob: 0.04040339098475779
					},
					{
						token: ' with',
						logprob: -5.833841323852539,
						prob: 0.00292681252410212
					},
					{
						token: ' of',
						logprob: -6.208841323852539,
						prob: 0.002011566868846531
					}
				]
			},
			{
				token: ' on',
				logprob: -5.390547752380371,
				prob: 0.004559475188226839,
				gini: 0.32301728544298464,
				opacity: {
					prob: 0.004559475188226839,
					gini: 0.32301728544298464
				},
				top: [
					{
						token: ' when',
						logprob: -1.015547752380371,
						prob: 0.3622039773952566
					},
					{
						token: ' in',
						logprob: -1.390547752380371,
						prob: 0.2489389103992075
					},
					{
						token: ' of',
						logprob: -2.640547752380371,
						prob: 0.07132219195452201
					},
					{
						token: ' that',
						logprob: -2.640547752380371,
						prob: 0.07132219195452201
					},
					{
						token: ' during',
						logprob: -3.140547752380371,
						prob: 0.04325909613832731
					}
				]
			},
			{
				token: ' worker',
				logprob: -2.2263362407684326,
				prob: 0.10792311098066773,
				gini: 0.334556066261251,
				opacity: {
					prob: 0.10792311098066773,
					gini: 0.334556066261251
				},
				top: [
					{
						token: ' the',
						logprob: -1.1013362407684326,
						prob: 0.33242658483030335
					},
					{
						token: ' worker',
						logprob: -2.2263362407684326,
						prob: 0.10792311098066773
					},
					{
						token: ' certain',
						logprob: -2.4763362407684326,
						prob: 0.08405060334324616
					},
					{
						token: ' `',
						logprob: -2.6013362407684326,
						prob: 0.07417439711078118
					},
					{
						token: ' distributed',
						logprob: -3.2263362407684326,
						prob: 0.0397026937570516
					}
				]
			},
			{
				token: ' initialization',
				logprob: -1.6255871057510376,
				prob: 0.19679610115764873,
				gini: 0.22895925958071828,
				opacity: {
					prob: 0.19679610115764873,
					gini: 0.22895925958071828
				},
				top: [
					{
						token: ' initialization',
						logprob: -1.6255871057510376,
						prob: 0.19679610115764873
					},
					{
						token: ' devices',
						logprob: -1.8755871057510376,
						prob: 0.15326495768697623
					},
					{
						token: ' processes',
						logprob: -2.375586986541748,
						prob: 0.09295990697839435
					},
					{
						token: ' nodes',
						logprob: -2.375586986541748,
						prob: 0.09295990697839435
					},
					{
						token: ' tasks',
						logprob: -2.625586986541748,
						prob: 0.07239724834901846
					}
				]
			},
			{
				token: ',',
				logprob: -1.9940176010131836,
				prob: 0.13614733949831123,
				gini: 0.2927274347909852,
				opacity: {
					prob: 0.13614733949831123,
					gini: 0.2927274347909852
				},
				top: [
					{
						token: '.',
						logprob: -0.9940175414085388,
						prob: 0.37008686101019905
					},
					{
						token: ',',
						logprob: -1.9940176010131836,
						prob: 0.13614733949831123
					},
					{
						token: ' when',
						logprob: -2.1190176010131836,
						prob: 0.120149605402393
					},
					{
						token: ' that',
						logprob: -2.3690176010131836,
						prob: 0.09357260677310397
					},
					{
						token: '.\n\n',
						logprob: -2.6190176010131836,
						prob: 0.07287441942892602
					}
				]
			},
			{
				token: ' which',
				logprob: -1.1001198291778564,
				prob: 0.3328311984195456,
				gini: 0.38383840011641057,
				opacity: {
					prob: 0.3328311984195456,
					gini: 0.38383840011641057
				},
				top: [
					{
						token: ' leading',
						logprob: -0.8501198291778564,
						prob: 0.42736371823733743
					},
					{
						token: ' which',
						logprob: -1.1001198291778564,
						prob: 0.3328311984195456
					},
					{
						token: ' resulting',
						logprob: -2.9751198291778564,
						prob: 0.05104131739858722
					},
					{
						token: ' particularly',
						logprob: -3.2251198291778564,
						prob: 0.03975101795901585
					},
					{
						token: ' impacting',
						logprob: -3.4751198291778564,
						prob: 0.030958123914367024
					}
				]
			},
			{
				token: ' could',
				logprob: -1.0734648704528809,
				prob: 0.3418220939304107,
				gini: 0.2935710754038414,
				opacity: {
					prob: 0.3418220939304107,
					gini: 0.2935710754038414
				},
				top: [
					{
						token: ' could',
						logprob: -1.0734648704528809,
						prob: 0.3418220939304107
					},
					{
						token: ' was',
						logprob: -1.8234648704528809,
						prob: 0.16146532416062342
					},
					{
						token: ' led',
						logprob: -2.323464870452881,
						prob: 0.09793366958385713
					},
					{
						token: ' would',
						logprob: -2.573464870452881,
						prob: 0.07627081856096415
					},
					{
						token: ' affected',
						logprob: -2.698464870452881,
						prob: 0.06730876113764253
					}
				]
			},
			{
				token: ' lead',
				logprob: -0.24409954249858856,
				prob: 0.7834096478276815,
				gini: 0.6920406266337558,
				opacity: {
					prob: 0.7834096478276815,
					gini: 0.6920406266337558
				},
				top: [
					{
						token: ' lead',
						logprob: -0.24409954249858856,
						prob: 0.7834096478276815
					},
					{
						token: ' result',
						logprob: -2.6190996170043945,
						prob: 0.0728684428062753
					},
					{
						token: ' prevent',
						logprob: -3.1190996170043945,
						prob: 0.04419694468752246
					},
					{
						token: ' disrupt',
						logprob: -3.6190996170043945,
						prob: 0.02680680201860576
					},
					{
						token: ' cause',
						logprob: -3.8690996170043945,
						prob: 0.020877158403730285
					}
				]
			},
			{
				token: ' to',
				logprob: -0.0007904515950940549,
				prob: 0.9992098607294702,
				gini: 0.9987771277887528,
				opacity: {
					prob: 0.9992098607294702,
					gini: 0.9987771277887528
				},
				top: [
					{
						token: ' to',
						logprob: -0.0007904515950940549,
						prob: 0.9992098607294702
					},
					{
						token: ' users',
						logprob: -8.1257905960083,
						prob: 0.00029581077077081894
					},
					{
						token: ' the',
						logprob: -8.3757905960083,
						prob: 0.00023037765991726965
					},
					{
						token: ' some',
						logprob: -10.0007905960083,
						prob: 0.00004536405094393167
					},
					{
						token: ' Tensor',
						logprob: -10.1257905960083,
						prob: 0.0000400336344467095
					}
				]
			},
			{
				token: ' crashes',
				logprob: -1.9622870683670044,
				prob: 0.1405366361944277,
				gini: 0.2564589956706482,
				opacity: {
					prob: 0.1405366361944277,
					gini: 0.2564589956706482
				},
				top: [
					{
						token: ' unexpected',
						logprob: -1.5872870683670044,
						prob: 0.20447959910221383
					},
					{
						token: ' crashes',
						logprob: -1.9622870683670044,
						prob: 0.1405366361944277
					},
					{
						token: ' incorrect',
						logprob: -2.462286949157715,
						prob: 0.08523978882617464
					},
					{
						token: ' a',
						logprob: -2.837286949157715,
						prob: 0.05858439298663634
					},
					{
						token: ' problems',
						logprob: -2.962286949157715,
						prob: 0.051700545350505264
					}
				]
			},
			{
				token: ' or',
				logprob: -0.6238649487495422,
				prob: 0.535869322602958,
				gini: 0.39710154290041716,
				opacity: {
					prob: 0.535869322602958,
					gini: 0.39710154290041716
				},
				top: [
					{
						token: ' or',
						logprob: -0.6238649487495422,
						prob: 0.535869322602958
					},
					{
						token: ' in',
						logprob: -1.7488648891448975,
						prob: 0.17397130813419553
					},
					{
						token: ' during',
						logprob: -2.2488648891448975,
						prob: 0.10551893229370343
					},
					{
						token: '.',
						logprob: -2.6238648891448975,
						prob: 0.07252203087493286
					},
					{
						token: '.\n\n',
						logprob: -3.4988648891448975,
						prob: 0.030231680261711656
					}
				]
			},
			{
				token: ' incorrect',
				logprob: -1.4613134860992432,
				prob: 0.2319314358557998,
				gini: 0.3786883167009174,
				opacity: {
					prob: 0.2319314358557998,
					gini: 0.3786883167009174
				},
				top: [
					{
						token: ' unexpected',
						logprob: -0.8363134264945984,
						prob: 0.4333049932660382
					},
					{
						token: ' incorrect',
						logprob: -1.4613134860992432,
						prob: 0.2319314358557998
					},
					{
						token: ' improper',
						logprob: -2.586313486099243,
						prob: 0.07529711290855023
					},
					{
						token: ' inconsistent',
						logprob: -3.211313486099243,
						prob: 0.040303640218786296
					},
					{
						token: ' mis',
						logprob: -3.461313486099243,
						prob: 0.03138850656301894
					}
				]
			},
			{
				token: ' model',
				logprob: -3.4048078060150146,
				prob: 0.03321320284641579,
				gini: 0.77456077370041,
				opacity: {
					prob: 0.03321320284641579,
					gini: 0.77456077370041
				},
				top: [
					{
						token: ' behavior',
						logprob: -0.15480771660804749,
						prob: 0.856579867731952
					},
					{
						token: ' behaviors',
						logprob: -3.0298078060150146,
						prob: 0.04832492499350778
					},
					{
						token: ' model',
						logprob: -3.4048078060150146,
						prob: 0.03321320284641579
					},
					{
						token: ' training',
						logprob: -3.9048078060150146,
						prob: 0.020144825833606085
					},
					{
						token: ' results',
						logprob: -4.0298075675964355,
						prob: 0.01777775063980905
					}
				]
			},
			{
				token: ' behavior',
				logprob: -0.7546054124832153,
				prob: 0.4701961116468439,
				gini: 0.4570071751759855,
				opacity: {
					prob: 0.4701961116468439,
					gini: 0.4570071751759855
				},
				top: [
					{
						token: ' training',
						logprob: -0.7546054124832153,
						prob: 0.4701961116468439
					},
					{
						token: ' behavior',
						logprob: -0.7546054124832153,
						prob: 0.4701961116468439
					},
					{
						token: ' behaviors',
						logprob: -3.879605293273926,
						prob: 0.020658977810153564
					},
					{
						token: ' states',
						logprob: -4.004605293273926,
						prob: 0.018231483928024407
					},
					{
						token: ' updates',
						logprob: -5.254605293273926,
						prob: 0.005223407599258454
					}
				]
			},
			{
				token: '.\n\n',
				logprob: -1.0705797672271729,
				prob: 0.34280970995826,
				gini: 0.2513214148588208,
				opacity: {
					prob: 0.34280970995826,
					gini: 0.2513214148588208
				},
				top: [
					{
						token: '.\n\n',
						logprob: -1.0705797672271729,
						prob: 0.34280970995826
					},
					{
						token: '.',
						logprob: -1.3205797672271729,
						prob: 0.26698047055997404
					},
					{
						token: ' during',
						logprob: -1.5705797672271729,
						prob: 0.20792459953687992
					},
					{
						token: ' in',
						logprob: -2.320579767227173,
						prob: 0.09821662631329195
					},
					{
						token: ' when',
						logprob: -2.570579767227173,
						prob: 0.07649118548342332
					}
				]
			},
			{
				token: "It's",
				logprob: -3.9319565296173096,
				prob: 0.01960527669948315,
				gini: 0.28146593211804316,
				opacity: {
					prob: 0.01960527669948315,
					gini: 0.28146593211804316
				},
				top: [
					{
						token: 'For',
						logprob: -1.3069565296173096,
						prob: 0.2706424966363878
					},
					{
						token: 'If',
						logprob: -1.4319565296173096,
						prob: 0.23884116498937402
					},
					{
						token: 'To',
						logprob: -2.4319565296173096,
						prob: 0.08786475430502717
					},
					{
						token: 'The',
						logprob: -2.6819565296173096,
						prob: 0.06842913945713175
					},
					{
						token: 'Additionally',
						logprob: -2.9319565296173096,
						prob: 0.053292667394116575
					}
				]
			},
			{
				token: ' always',
				logprob: -0.8917133212089539,
				prob: 0.40995276993122987,
				gini: 0.3462772490157097,
				opacity: {
					prob: 0.40995276993122987,
					gini: 0.3462772490157097
				},
				top: [
					{
						token: ' always',
						logprob: -0.8917133212089539,
						prob: 0.40995276993122987
					},
					{
						token: ' important',
						logprob: -1.0167133808135986,
						prob: 0.3617820281063957
					},
					{
						token: ' worth',
						logprob: -2.0167133808135986,
						prob: 0.13309217032565188
					},
					{
						token: ' essential',
						logprob: -3.2667133808135986,
						prob: 0.03813154522283271
					},
					{
						token: ' best',
						logprob: -4.1417131423950195,
						prob: 0.015895596744857562
					}
				]
			},
			{
				token: ' a',
				logprob: -0.5137279629707336,
				prob: 0.5982611211059783,
				gini: 0.4268891962528925,
				opacity: {
					prob: 0.5982611211059783,
					gini: 0.4268891962528925
				},
				top: [
					{
						token: ' a',
						logprob: -0.5137279629707336,
						prob: 0.5982611211059783
					},
					{
						token: ' best',
						logprob: -1.5137279033660889,
						prob: 0.22008798002533336
					},
					{
						token: ' good',
						logprob: -2.263727903366089,
						prob: 0.10396220042430003
					},
					{
						token: ' recommended',
						logprob: -3.013727903366089,
						prob: 0.04910826622979706
					},
					{
						token: ' advisable',
						logprob: -3.888727903366089,
						prob: 0.020471371043463093
					}
				]
			},
			{
				token: ' good',
				logprob: -0.00016516048344783485,
				prob: 0.9998348531547939,
				gini: 0.9996737396918122,
				opacity: {
					prob: 0.9998348531547939,
					gini: 0.9996737396918122
				},
				top: [
					{
						token: ' good',
						logprob: -0.00016516048344783485,
						prob: 0.9998348531547939
					},
					{
						token: ' great',
						logprob: -9.250164985656738,
						prob: 0.00009609579632537961
					},
					{
						token: ' best',
						logprob: -9.625164985656738,
						prob: 0.00006604561055131432
					},
					{
						token: ' smart',
						logprob: -14.500164985656738,
						prob: 5.042644593014164e-7
					},
					{
						token: ' wise',
						logprob: -14.500164985656738,
						prob: 5.042644593014164e-7
					}
				]
			},
			{
				token: ' practice',
				logprob: -0.9757320880889893,
				prob: 0.37691631658787494,
				gini: 0.5284007975313365,
				opacity: {
					prob: 0.37691631658787494,
					gini: 0.5284007975313365
				},
				top: [
					{
						token: ' idea',
						logprob: -0.47573208808898926,
						prob: 0.621429948432373
					},
					{
						token: ' practice',
						logprob: -0.9757320880889893,
						prob: 0.37691631658787494
					},
					{
						token: ' approach',
						logprob: -6.60073184967041,
						prob: 0.001359372816868361
					},
					{
						token: ' habit',
						logprob: -9.22573184967041,
						prob: 0.00009847263657291008
					},
					{
						token: ' strategy',
						logprob: -9.97573184967041,
						prob: 0.0000465151798772643
					}
				]
			},
			{
				token: ' to',
				logprob: -0.00004584861744660884,
				prob: 0.9999541524335852,
				gini: 0.9999102595509118,
				opacity: {
					prob: 0.9999541524335852,
					gini: 0.9999102595509118
				},
				top: [
					{
						token: ' to',
						logprob: -0.00004584861744660884,
						prob: 0.9999541524335852
					},
					{
						token: ' for',
						logprob: -10.625045776367188,
						prob: 0.00002429971888101529
					},
					{
						token: ',',
						logprob: -11.000045776367188,
						prob: 0.00001670093626455637
					},
					{
						token: ' when',
						logprob: -12.500045776367188,
						prob: 0.0000037264825833391815
					},
					{
						token: ' check',
						logprob: -15.750045776367188,
						prob: 1.4449141016768576e-7
					}
				]
			},
			{
				token: ' check',
				logprob: -0.28883740305900574,
				prob: 0.7491340023976762,
				gini: 0.5942555797970169,
				opacity: {
					prob: 0.7491340023976762,
					gini: 0.5942555797970169
				},
				top: [
					{
						token: ' check',
						logprob: -0.28883740305900574,
						prob: 0.7491340023976762
					},
					{
						token: ' refer',
						logprob: -1.7888374328613281,
						prob: 0.1671543849460388
					},
					{
						token: ' consult',
						logprob: -3.038837432861328,
						prob: 0.04789053310325486
					},
					{
						token: ' review',
						logprob: -3.413837432861328,
						prob: 0.03291464995745121
					},
					{
						token: ' look',
						logprob: -6.538837432861328,
						prob: 0.0014461687904182236
					}
				]
			},
			{
				token: ' the',
				logprob: -0.005364783573895693,
				prob: 0.9946495811780931,
				gini: 0.989408417740912,
				opacity: {
					prob: 0.9946495811780931,
					gini: 0.989408417740912
				},
				top: [
					{
						token: ' the',
						logprob: -0.005364783573895693,
						prob: 0.9946495811780931
					},
					{
						token: ' Tensor',
						logprob: -5.255364894866943,
						prob: 0.005219441397082529
					},
					{
						token: ' official',
						logprob: -9.505364418029785,
						prob: 0.00007445136846346956
					},
					{
						token: ' release',
						logprob: -11.005364418029785,
						prob: 0.00001661234576852372
					},
					{
						token: ' [',
						logprob: -11.255364418029785,
						prob: 0.000012937707893179211
					}
				]
			},
			{
				token: ' official',
				logprob: -0.016100063920021057,
				prob: 0.9840288493446054,
				gini: 0.9690720843577376,
				opacity: {
					prob: 0.9840288493446054,
					gini: 0.9690720843577376
				},
				top: [
					{
						token: ' official',
						logprob: -0.016100063920021057,
						prob: 0.9840288493446054
					},
					{
						token: ' [',
						logprob: -4.76609992980957,
						prob: 0.008513518817358809
					},
					{
						token: ' release',
						logprob: -5.51609992980957,
						prob: 0.004021501535451541
					},
					{
						token: ' Tensor',
						logprob: -5.89109992980957,
						prob: 0.002763934889957277
					},
					{
						token: ' specific',
						logprob: -8.01609992980957,
						prob: 0.00033010494800354666
					}
				]
			},
			{
				token: ' Tensor',
				logprob: -0.046668048948049545,
				prob: 0.9544041604776321,
				gini: 0.9119742947158256,
				opacity: {
					prob: 0.9544041604776321,
					gini: 0.9119742947158256
				},
				top: [
					{
						token: ' Tensor',
						logprob: -0.046668048948049545,
						prob: 0.9544041604776321
					},
					{
						token: ' [',
						logprob: -3.67166805267334,
						prob: 0.02543400927604199
					},
					{
						token: ' release',
						logprob: -3.92166805267334,
						prob: 0.019808026340826877
					},
					{
						token: ' Git',
						logprob: -8.54666805267334,
						prob: 0.00019419105718593884
					},
					{
						token: ' **',
						logprob: -8.92166805267334,
						prob: 0.00013346543164098035
					}
				]
			},
			{
				token: 'Flow',
				logprob: -0.0000015048530030981055,
				prob: 0.9999984951481292,
				gini: 0.9999972014068804,
				opacity: {
					prob: 0.9544041604776321,
					gini: 0.9119742947158256
				},
				top: [
					{
						token: 'Flow',
						logprob: -0.0000015048530030981055,
						prob: 0.9999984951481292
					},
					{
						token: 'flow',
						logprob: -13.500001907348633,
						prob: 0.000001370956471489639
					},
					{
						token: 'Board',
						logprob: -17.625001907348633,
						prob: 2.2159447507533765e-8
					},
					{
						token: ' Flow',
						logprob: -19.250001907348633,
						prob: 4.363453930307876e-9
					},
					{
						token: 'Flows',
						logprob: -20.125001907348633,
						prob: 1.8189582181622667e-9
					}
				]
			},
			{
				token: ' Git',
				logprob: -0.47798261046409607,
				prob: 0.6200329789739962,
				gini: 0.5262627043840765,
				opacity: {
					prob: 0.6200329789739962,
					gini: 0.5262627043840765
				},
				top: [
					{
						token: ' Git',
						logprob: -0.47798261046409607,
						prob: 0.6200329789739962
					},
					{
						token: ' release',
						logprob: -0.9779826402664185,
						prob: 0.37606900057295756
					},
					{
						token: ' [',
						logprob: -6.227982521057129,
						prob: 0.0019734292351194322
					},
					{
						token: ' chang',
						logprob: -6.852982521057129,
						prob: 0.0010563005514711656
					},
					{
						token: ' repository',
						logprob: -7.602982521057129,
						prob: 0.0004989610501568673
					}
				]
			},
			{
				token: 'Hub',
				logprob: 0,
				prob: 1,
				gini: 0.9999999140081403,
				opacity: {
					prob: 0.6200329789739962,
					gini: 0.5262627043840765
				},
				top: [
					{
						token: 'Hub',
						logprob: 0,
						prob: 1
					},
					{
						token: ' Hub',
						logprob: -17.75,
						prob: 1.9555681087850496e-8
					},
					{
						token: ' repository',
						logprob: -17.875,
						prob: 1.7257827987960214e-8
					},
					{
						token: 'Hu',
						logprob: -19.25,
						prob: 4.363462252943702e-9
					},
					{
						token: 'H',
						logprob: -20.125,
						prob: 1.8189616875530459e-9
					}
				]
			},
			{
				token: ' repository',
				logprob: -0.032145459204912186,
				prob: 0.9683657141273346,
				gini: 0.9388448939316916,
				opacity: {
					prob: 0.9683657141273346,
					gini: 0.9388448939316916
				},
				top: [
					{
						token: ' repository',
						logprob: -0.032145459204912186,
						prob: 0.9683657141273346
					},
					{
						token: ' release',
						logprob: -3.6571455001831055,
						prob: 0.02580607111548254
					},
					{
						token: ' releases',
						logprob: -5.2821455001831055,
						prob: 0.005081516693788231
					},
					{
						token: ' page',
						logprob: -7.7821455001831055,
						prob: 0.00041711629081692575
					},
					{
						token: ' repo',
						logprob: -9.157145500183105,
						prob: 0.00010546351437372659
					}
				]
			},
			{
				token: ' or',
				logprob: -0.12717115879058838,
				prob: 0.8805829401868812,
				gini: 0.8076203147920119,
				opacity: {
					prob: 0.8805829401868812,
					gini: 0.8076203147920119
				},
				top: [
					{
						token: ' or',
						logprob: -0.12717115879058838,
						prob: 0.8805829401868812
					},
					{
						token: "'s",
						logprob: -2.877171039581299,
						prob: 0.05629379069200381
					},
					{
						token: ' for',
						logprob: -3.877171039581299,
						prob: 0.020709328261196504
					},
					{
						token: ' and',
						logprob: -4.127171039581299,
						prob: 0.016128441066702612
					},
					{
						token: ',',
						logprob: -4.752171039581299,
						prob: 0.008632932405147589
					}
				]
			},
			{
				token: ' release',
				logprob: -0.8916424512863159,
				prob: 0.4099818242818477,
				gini: 0.4493184392386708,
				opacity: {
					prob: 0.4099818242818477,
					gini: 0.4493184392386708
				},
				top: [
					{
						token: ' the',
						logprob: -0.6416424512863159,
						prob: 0.5264270827579
					},
					{
						token: ' release',
						logprob: -0.8916424512863159,
						prob: 0.4099818242818477
					},
					{
						token: ' their',
						logprob: -2.8916425704956055,
						prob: 0.055484999696719245
					},
					{
						token: ' its',
						logprob: -5.1416425704956055,
						prob: 0.005848075942849486
					},
					{
						token: ' Tensor',
						logprob: -6.7666425704956055,
						prob: 0.0011515544306278389
					}
				]
			},
			{
				token: ' notes',
				logprob: -0.000008537868779967539,
				prob: 0.9999914621676675,
				gini: 0.9999859268697372,
				opacity: {
					prob: 0.9999914621676675,
					gini: 0.9999859268697372
				},
				top: [
					{
						token: ' notes',
						logprob: -0.000008537868779967539,
						prob: 0.9999914621676675
					},
					{
						token: ' note',
						logprob: -12.750008583068848,
						prob: 0.000002902295497941424
					},
					{
						token: ' logs',
						logprob: -13.375008583068848,
						prob: 0.0000015534868342123606
					},
					{
						token: ' documentation',
						logprob: -13.500008583068848,
						prob: 0.0000013709473193983572
					},
					{
						token: ' chang',
						logprob: -13.625008583068848,
						prob: 0.0000012098567629757041
					}
				]
			},
			{
				token: ' for',
				logprob: -0.005092152860015631,
				prob: 0.9949207901717411,
				gini: 0.9904668262586888,
				opacity: {
					prob: 0.9949207901717411,
					gini: 0.9904668262586888
				},
				top: [
					{
						token: ' for',
						logprob: -0.005092152860015631,
						prob: 0.9949207901717411
					},
					{
						token: ' to',
						logprob: -5.505092144012451,
						prob: 0.004066013904782293
					},
					{
						token: ' directly',
						logprob: -7.505092144012451,
						prob: 0.0005502751434477171
					},
					{
						token: ',',
						logprob: -9.38009262084961,
						prob: 0.00008438738613996191
					},
					{
						token: ' on',
						logprob: -9.38009262084961,
						prob: 0.00008438738613996191
					}
				]
			},
			{
				token: ' the',
				logprob: -0.28340187668800354,
				prob: 0.7532170266634353,
				gini: 0.615528246846536,
				opacity: {
					prob: 0.7532170266634353,
					gini: 0.615528246846536
				},
				top: [
					{
						token: ' the',
						logprob: -0.28340187668800354,
						prob: 0.7532170266634353
					},
					{
						token: ' detailed',
						logprob: -1.6584018468856812,
						prob: 0.19044309425048234
					},
					{
						token: ' specific',
						logprob: -3.9084019660949707,
						prob: 0.020072552064328068
					},
					{
						token: ' a',
						logprob: -4.033401966094971,
						prob: 0.017713965023737545
					},
					{
						token: ' comprehensive',
						logprob: -4.658401966094971,
						prob: 0.009481602223341188
					}
				]
			},
			{
				token: ' most',
				logprob: -0.0273988489061594,
				prob: 0.9729730948689369,
				gini: 0.9510794064450624,
				opacity: {
					prob: 0.9729730948689369,
					gini: 0.9510794064450624
				},
				top: [
					{
						token: ' most',
						logprob: -0.0273988489061594,
						prob: 0.9729730948689369
					},
					{
						token: ' specific',
						logprob: -4.152399063110352,
						prob: 0.01572664198463206
					},
					{
						token: ' latest',
						logprob: -5.027399063110352,
						prob: 0.006555839740474547
					},
					{
						token: ' exact',
						logprob: -6.652399063110352,
						prob: 0.0012909213856670716
					},
					{
						token: ' detailed',
						logprob: -6.652399063110352,
						prob: 0.0012909213856670716
					}
				]
			},
			{
				token: ' detailed',
				logprob: -1.510000467300415,
				prob: 0.22090987472807794,
				gini: 0.5349514214549997,
				opacity: {
					prob: 0.22090987472807794,
					gini: 0.5349514214549997
				},
				top: [
					{
						token: ' accurate',
						logprob: -0.38500040769577026,
						prob: 0.6804503587877979
					},
					{
						token: ' detailed',
						logprob: -1.510000467300415,
						prob: 0.22090987472807794
					},
					{
						token: ' up',
						logprob: -3.135000467300415,
						prob: 0.04349973350185447
					},
					{
						token: ' precise',
						logprob: -3.760000467300415,
						prob: 0.023283729494398005
					},
					{
						token: ' comprehensive',
						logprob: -4.385000228881836,
						prob: 0.012462885281804269
					}
				]
			},
			{
				token: ' and',
				logprob: -0.02538197673857212,
				prob: 0.974937437471876,
				gini: 0.952371815202197,
				opacity: {
					prob: 0.974937437471876,
					gini: 0.952371815202197
				},
				top: [
					{
						token: ' and',
						logprob: -0.02538197673857212,
						prob: 0.974937437471876
					},
					{
						token: ' information',
						logprob: -3.7753820419311523,
						prob: 0.02292832938521535
					},
					{
						token: ',',
						logprob: -7.150382041931152,
						prob: 0.0007845642875921478
					},
					{
						token: ' updates',
						logprob: -7.775382041931152,
						prob: 0.0004199470013415569
					},
					{
						token: ' descriptions',
						logprob: -8.400382041931152,
						prob: 0.00022478143184034806
					}
				]
			},
			{
				token: ' updated',
				logprob: -2.7195615768432617,
				prob: 0.06590364177616677,
				gini: 0.34464399730116774,
				opacity: {
					prob: 0.06590364177616677,
					gini: 0.34464399730116774
				},
				top: [
					{
						token: ' accurate',
						logprob: -0.7195615172386169,
						prob: 0.48696573523334463
					},
					{
						token: ' specific',
						logprob: -1.4695615768432617,
						prob: 0.23002631194453166
					},
					{
						token: ' up',
						logprob: -1.7195615768432617,
						prob: 0.1791446718694285
					},
					{
						token: ' updated',
						logprob: -2.7195615768432617,
						prob: 0.06590364177616677
					},
					{
						token: ' current',
						logprob: -4.469561576843262,
						prob: 0.011452335719189997
					}
				]
			},
			{
				token: ' information',
				logprob: -0.009516650810837746,
				prob: 0.9905284892030848,
				gini: 0.983411166449411,
				opacity: {
					prob: 0.9905284892030848,
					gini: 0.983411166449411
				},
				top: [
					{
						token: ' information',
						logprob: -0.009516650810837746,
						prob: 0.9905284892030848
					},
					{
						token: ' bug',
						logprob: -5.634516716003418,
						prob: 0.003572403301439005
					},
					{
						token: ' list',
						logprob: -5.759516716003418,
						prob: 0.0031526348483029046
					},
					{
						token: ' descriptions',
						logprob: -7.009516716003418,
						prob: 0.0009032450067873799
					},
					{
						token: ' chang',
						logprob: -7.259516716003418,
						prob: 0.0007034479185913478
					}
				]
			},
			{
				token: ' about',
				logprob: -1.432016134262085,
				prob: 0.2388269293708358,
				gini: 0.35145652839725755,
				opacity: {
					prob: 0.2388269293708358,
					gini: 0.35145652839725755
				},
				top: [
					{
						token: ' regarding',
						logprob: -0.807016134262085,
						prob: 0.44618744532301485
					},
					{
						token: ' on',
						logprob: -1.182016134262085,
						prob: 0.3066598475016412
					},
					{
						token: ' about',
						logprob: -1.432016134262085,
						prob: 0.2388269293708358
					},
					{
						token: ',',
						logprob: -5.557016372680664,
						prob: 0.0038602768600319443
					},
					{
						token: ' concerning',
						logprob: -5.932016372680664,
						prob: 0.002653126899064834
					}
				]
			},
			{
				token: ' bug',
				logprob: -1.0093662738800049,
				prob: 0.36444986780450056,
				gini: 0.43568362744851585,
				opacity: {
					prob: 0.36444986780450056,
					gini: 0.43568362744851585
				},
				top: [
					{
						token: ' specific',
						logprob: -0.6343663334846497,
						prob: 0.5302713971076475
					},
					{
						token: ' bug',
						logprob: -1.0093662738800049,
						prob: 0.36444986780450056
					},
					{
						token: ' bugs',
						logprob: -3.259366273880005,
						prob: 0.038412733458268324
					},
					{
						token: ' fixes',
						logprob: -3.384366273880005,
						prob: 0.03389911829672945
					},
					{
						token: ' fixed',
						logprob: -4.509366512298584,
						prob: 0.011005429772406553
					}
				]
			},
			{
				token: ' fixes',
				logprob: -0.0000059153885558771435,
				prob: 0.99999408462894,
				gini: 0.9999892036260347,
				opacity: {
					prob: 0.99999408462894,
					gini: 0.9999892036260347
				},
				top: [
					{
						token: ' fixes',
						logprob: -0.0000059153885558771435,
						prob: 0.99999408462894
					},
					{
						token: 'fix',
						logprob: -12.625005722045898,
						prob: 0.000003288741062985334
					},
					{
						token: ' reports',
						logprob: -13.750005722045898,
						prob: 0.0000010676979006009105
					},
					{
						token: ' fix',
						logprob: -14.000005722045898,
						prob: 8.315239610716842e-7
					},
					{
						token: '-f',
						logprob: -15.375005722045898,
						prob: 2.1024218221932635e-7
					}
				]
			},
			{
				token: ',',
				logprob: -2.482943534851074,
				prob: 0.0834970869257157,
				gini: 0.8139281676920931,
				opacity: {
					prob: 0.0834970869257157,
					gini: 0.8139281676920931
				},
				top: [
					{
						token: ' and',
						logprob: -0.10794363170862198,
						prob: 0.8976781955904201
					},
					{
						token: ',',
						logprob: -2.482943534851074,
						prob: 0.0834970869257157
					},
					{
						token: ' in',
						logprob: -4.232943534851074,
						prob: 0.01450961806170622
					},
					{
						token: ' or',
						logprob: -6.107943534851074,
						prob: 0.0022251219967855326
					},
					{
						token: ' for',
						logprob: -6.482943534851074,
						prob: 0.0015293024923926566
					}
				]
			},
			{
				token: ' features',
				logprob: -1.3760185241699219,
				prob: 0.25258220366761386,
				gini: 0.22514384826772785,
				opacity: {
					prob: 0.25258220366761386,
					gini: 0.22514384826772785
				},
				top: [
					{
						token: ' as',
						logprob: -1.2510185241699219,
						prob: 0.28621313335816667
					},
					{
						token: ' features',
						logprob: -1.3760185241699219,
						prob: 0.25258220366761386
					},
					{
						token: ' new',
						logprob: -1.8760185241699219,
						prob: 0.15319885062218858
					},
					{
						token: ' improvements',
						logprob: -2.001018524169922,
						prob: 0.1351975111536015
					},
					{
						token: ' enhancements',
						logprob: -2.126018524169922,
						prob: 0.11931138483019964
					}
				]
			},
			{
				token: ',',
				logprob: -0.007985727861523628,
				prob: 0.9920460733549581,
				gini: 0.9843311090751765,
				opacity: {
					prob: 0.9920460733549581,
					gini: 0.9843311090751765
				},
				top: [
					{
						token: ',',
						logprob: -0.007985727861523628,
						prob: 0.9920460733549581
					},
					{
						token: ' added',
						logprob: -4.882985591888428,
						prob: 0.007574366269425127
					},
					{
						token: ' introduced',
						logprob: -8.132986068725586,
						prob: 0.00029368991188197843
					},
					{
						token: ' included',
						logprob: -11.257986068725586,
						prob: 0.00001290383416422286
					},
					{
						token: ' implemented',
						logprob: -11.257986068725586,
						prob: 0.00001290383416422286
					}
				]
			},
			{
				token: ' and',
				logprob: -0.011301981285214424,
				prob: 0.9887616461742273,
				gini: 0.977806295819656,
				opacity: {
					prob: 0.9887616461742273,
					gini: 0.977806295819656
				},
				top: [
					{
						token: ' and',
						logprob: -0.011301981285214424,
						prob: 0.9887616461742273
					},
					{
						token: ' or',
						logprob: -4.5113019943237305,
						prob: 0.010984149561279244
					},
					{
						token: ' improvements',
						logprob: -9.01130199432373,
						prob: 0.00012202287945178689
					},
					{
						token: ' enhancements',
						logprob: -9.13630199432373,
						prob: 0.0001076848131606554
					},
					{
						token: ' performance',
						logprob: -12.01130199432373,
						prob: 0.000006075161441709734
					}
				]
			},
			{
				token: ' improvements',
				logprob: -0.9394600987434387,
				prob: 0.3908387927606378,
				gini: 0.2919047264920556,
				opacity: {
					prob: 0.3908387927606378,
					gini: 0.2919047264920556
				},
				top: [
					{
						token: ' improvements',
						logprob: -0.9394600987434387,
						prob: 0.3908387927606378
					},
					{
						token: ' changes',
						logprob: -1.314460039138794,
						prob: 0.2686193280109522
					},
					{
						token: ' other',
						logprob: -1.564460039138794,
						prob: 0.2092009430030441
					},
					{
						token: ' any',
						logprob: -2.939460039138794,
						prob: 0.05289428187086148
					},
					{
						token: ' enhancements',
						logprob: -3.064460039138794,
						prob: 0.04667903991547177
					}
				]
			},
			{
				token: ' in',
				logprob: -0.5286523699760437,
				prob: 0.5893987261326296,
				gini: 0.4875517799947395,
				opacity: {
					prob: 0.5893987261326296,
					gini: 0.4875517799947395
				},
				top: [
					{
						token: ' in',
						logprob: -0.5286523699760437,
						prob: 0.5893987261326296
					},
					{
						token: ' for',
						logprob: -1.5286524295806885,
						prob: 0.21682766107289564
					},
					{
						token: ' associated',
						logprob: -3.2786524295806885,
						prob: 0.03767899771377364
					},
					{
						token: '.',
						logprob: -3.4036524295806885,
						prob: 0.03325159877489729
					},
					{
						token: ' included',
						logprob: -3.6536524295806885,
						prob: 0.02589637116426618
					}
				]
			},
			{
				token: ' each',
				logprob: -0.5215868353843689,
				prob: 0.5935778898473779,
				gini: 0.4468100329171671,
				opacity: {
					prob: 0.5935778898473779,
					gini: 0.4468100329171671
				},
				top: [
					{
						token: ' each',
						logprob: -0.5215868353843689,
						prob: 0.5935778898473779
					},
					{
						token: ' specific',
						logprob: -1.2715868949890137,
						prob: 0.28038632489816384
					},
					{
						token: ' any',
						logprob: -2.5215868949890137,
						prob: 0.0803320270573237
					},
					{
						token: ' a',
						logprob: -4.021586894989014,
						prob: 0.017924498062348637
					},
					{
						token: ' new',
						logprob: -4.021586894989014,
						prob: 0.017924498062348637
					}
				]
			},
			{
				token: ' version',
				logprob: -0.3524031937122345,
				prob: 0.7029966210099647,
				gini: 0.5623998120355725,
				opacity: {
					prob: 0.7029966210099647,
					gini: 0.5623998120355725
				},
				top: [
					{
						token: ' version',
						logprob: -0.3524031937122345,
						prob: 0.7029966210099647
					},
					{
						token: ' release',
						logprob: -1.352403163909912,
						prob: 0.2586180117899753
					},
					{
						token: ' specific',
						logprob: -3.602403163909912,
						prob: 0.027258137900394483
					},
					{
						token: ' Tensor',
						logprob: -4.852403163909912,
						prob: 0.0078095872619395705
					},
					{
						token: ' new',
						logprob: -5.852403163909912,
						prob: 0.0028729865977019436
					}
				]
			},
			{
				token: '.',
				logprob: -0.057585615664720535,
				prob: 0.9440410622233274,
				gini: 0.8946788194338995,
				opacity: {
					prob: 0.9440410622233274,
					gini: 0.8946788194338995
				},
				top: [
					{
						token: '.',
						logprob: -0.057585615664720535,
						prob: 0.9440410622233274
					},
					{
						token: ',',
						logprob: -3.4325857162475586,
						prob: 0.03230330550907038
					},
					{
						token: '.\n\n',
						logprob: -3.9325857162475586,
						prob: 0.019592945201315205
					},
					{
						token: ' release',
						logprob: -6.182585716247559,
						prob: 0.0020650812311017236
					},
					{
						token: ' of',
						logprob: -7.057585716247559,
						prob: 0.000860853932797245
					}
				]
			},
			{
				token: ' If',
				logprob: -0.3776388466358185,
				prob: 0.6854780186597134,
				gini: 0.5558610601204084,
				opacity: {
					prob: 0.6854780186597134,
					gini: 0.5558610601204084
				},
				top: [
					{
						token: ' If',
						logprob: -0.3776388466358185,
						prob: 0.6854780186597134
					},
					{
						token: '<|end|>',
						logprob: -1.502638816833496,
						prob: 0.22254213671006123
					},
					{
						token: ' You',
						logprob: -3.627638816833496,
						prob: 0.02657886795170072
					},
					{
						token: ' Would',
						logprob: -3.877638816833496,
						prob: 0.020699643173935987
					},
					{
						token: ' For',
						logprob: -4.377638816833496,
						prob: 0.012554968230103504
					}
				]
			},
			{
				token: ' you',
				logprob: -0.40574443340301514,
				prob: 0.6664804758085516,
				gini: 0.5444026435144352,
				opacity: {
					prob: 0.6664804758085516,
					gini: 0.5444026435144352
				},
				top: [
					{
						token: ' you',
						logprob: -0.40574443340301514,
						prob: 0.6664804758085516
					},
					{
						token: " you're",
						logprob: -1.1557444334030151,
						prob: 0.31482308482687676
					},
					{
						token: " you'd",
						logprob: -4.530744552612305,
						prob: 0.01077265227964944
					},
					{
						token: ' there',
						logprob: -5.530744552612305,
						prob: 0.0039630373005717
					},
					{
						token: " there's",
						logprob: -5.780744552612305,
						prob: 0.0030864165530264265
					}
				]
			},
			{
				token: ' would',
				logprob: -3.745345115661621,
				prob: 0.023627473429318587,
				gini: 0.44344411164589376,
				opacity: {
					prob: 0.023627473429318587,
					gini: 0.44344411164589376
				},
				top: [
					{
						token: ' need',
						logprob: -0.49534502625465393,
						prob: 0.6093606256076566
					},
					{
						token: ' have',
						logprob: -1.7453449964523315,
						prob: 0.17458474745735086
					},
					{
						token: ' are',
						logprob: -2.120345115661621,
						prob: 0.11999021086391805
					},
					{
						token: ' want',
						logprob: -3.120345115661621,
						prob: 0.044141931718661695
					},
					{
						token: ' would',
						logprob: -3.745345115661621,
						prob: 0.023627473429318587
					}
				]
			},
			{
				token: ' like',
				logprob: -0.00012439649435691535,
				prob: 0.9998756112425662,
				gini: 0.9997646780455736,
				opacity: {
					prob: 0.9998756112425662,
					gini: 0.9997646780455736
				},
				top: [
					{
						token: ' like',
						logprob: -0.00012439649435691535,
						prob: 0.9998756112425662
					},
					{
						token: ' need',
						logprob: -9.125123977661133,
						prob: 0.00010889526843745734
					},
					{
						token: ' require',
						logprob: -12.375123977661133,
						prob: 0.000004222327770285129
					},
					{
						token: ' want',
						logprob: -12.875123977661133,
						prob: 0.0000025609712480340118
					},
					{
						token: ' be',
						logprob: -13.125123977661133,
						prob: 0.0000019944864133922413
					}
				]
			},
			{
				token: ' more',
				logprob: -0.772670328617096,
				prob: 0.46177832058962837,
				gini: 0.3796862863498798,
				opacity: {
					prob: 0.46177832058962837,
					gini: 0.3796862863498798
				},
				top: [
					{
						token: ' more',
						logprob: -0.772670328617096,
						prob: 0.46177832058962837
					},
					{
						token: ' to',
						logprob: -1.2726702690124512,
						prob: 0.2800827261224501
					},
					{
						token: ' specific',
						logprob: -2.522670269012451,
						prob: 0.08024504455176083
					},
					{
						token: ',',
						logprob: -3.272670269012451,
						prob: 0.03790507506946441
					},
					{
						token: ' information',
						logprob: -3.522670269012451,
						prob: 0.02952050214647927
					}
				]
			},
			{
				token: ' specific',
				logprob: -0.3661794364452362,
				prob: 0.6933783726961843,
				gini: 0.5221422769716729,
				opacity: {
					prob: 0.6933783726961843,
					gini: 0.5221422769716729
				},
				top: [
					{
						token: ' specific',
						logprob: -0.3661794364452362,
						prob: 0.6933783726961843
					},
					{
						token: ' information',
						logprob: -2.4911794662475586,
						prob: 0.08281223471505611
					},
					{
						token: ' detailed',
						logprob: -2.4911794662475586,
						prob: 0.08281223471505611
					},
					{
						token: ' specifics',
						logprob: -2.7411794662475586,
						prob: 0.06449423324397868
					},
					{
						token: ' details',
						logprob: -2.8661794662475586,
						prob: 0.056915961072379624
					}
				]
			},
			{
				token: ' details',
				logprob: -0.21563118696212769,
				prob: 0.8060325223639115,
				gini: 0.6863910761236415,
				opacity: {
					prob: 0.8060325223639115,
					gini: 0.6863910761236415
				},
				top: [
					{
						token: ' details',
						logprob: -0.21563118696212769,
						prob: 0.8060325223639115
					},
					{
						token: ' information',
						logprob: -1.7156312465667725,
						prob: 0.1798501550799975
					},
					{
						token: ' or',
						logprob: -4.715631008148193,
						prob: 0.008954214101789516
					},
					{
						token: ' bug',
						logprob: -6.715631008148193,
						prob: 0.0012118211016269556
					},
					{
						token: ' release',
						logprob: -7.090631008148193,
						prob: 0.0008328716509608718
					}
				]
			},
			{
				token: ' about',
				logprob: -1.0798956155776978,
				prob: 0.3396309759778991,
				gini: 0.3743148725128124,
				opacity: {
					prob: 0.3396309759778991,
					gini: 0.3743148725128124
				},
				top: [
					{
						token: ' or',
						logprob: -0.7048956155776978,
						prob: 0.49416015418624376
					},
					{
						token: ' about',
						logprob: -1.0798956155776978,
						prob: 0.3396309759778991
					},
					{
						token: ',',
						logprob: -2.329895496368408,
						prob: 0.09730591537974444
					},
					{
						token: ' on',
						logprob: -3.079895496368408,
						prob: 0.04596405980923876
					},
					{
						token: ' regarding',
						logprob: -3.954895496368408,
						prob: 0.019160670804703028
					}
				]
			},
			{
				token: ' Tensor',
				logprob: -2.7881648540496826,
				prob: 0.06153403429625003,
				gini: 0.28875700421335543,
				opacity: {
					prob: 0.06153403429625003,
					gini: 0.28875700421335543
				},
				top: [
					{
						token: ' the',
						logprob: -1.0381648540496826,
						prob: 0.3541039184266288
					},
					{
						token: ' other',
						logprob: -1.5381648540496826,
						prob: 0.21477488325013172
					},
					{
						token: ' this',
						logprob: -1.9131648540496826,
						prob: 0.1476124746113983
					},
					{
						token: ' Tensor',
						logprob: -2.7881648540496826,
						prob: 0.06153403429625003
					},
					{
						token: ' a',
						logprob: -2.9131648540496826,
						prob: 0.05430359466997492
					}
				]
			},
			{
				token: 'Flow',
				logprob: -0.000028087270038668066,
				prob: 0.999971913124405,
				gini: 0.9999442057801909,
				opacity: {
					prob: 0.06153403429625003,
					gini: 0.28875700421335543
				},
				top: [
					{
						token: 'Flow',
						logprob: -0.000028087270038668066,
						prob: 0.999971913124405
					},
					{
						token: 'flow',
						logprob: -10.500027656555176,
						prob: 0.000027535687796947383
					},
					{
						token: 'Flows',
						logprob: -15.500027656555176,
						prob: 1.8553400495919595e-7
					},
					{
						token: 'Board',
						logprob: -16.125028610229492,
						prob: 9.930910182472369e-8
					},
					{
						token: ' Flow',
						logprob: -16.375028610229492,
						prob: 7.734200626721269e-8
					}
				]
			},
			{
				token: ' ',
				logprob: -0.11693426966667175,
				prob: 0.88964366781644,
				gini: 0.825386120079113,
				opacity: {
					prob: 0.88964366781644,
					gini: 0.825386120079113
				},
				top: [
					{
						token: ' ',
						logprob: -0.11693426966667175,
						prob: 0.88964366781644
					},
					{
						token: ' version',
						logprob: -3.116934299468994,
						prob: 0.04429274879258754
					},
					{
						token: "'s",
						logprob: -4.116934299468994,
						prob: 0.01629439167376418
					},
					{
						token: ' updates',
						logprob: -4.116934299468994,
						prob: 0.01629439167376418
					},
					{
						token: ' releases',
						logprob: -4.241934299468994,
						prob: 0.01437975018159711
					}
				]
			},
			{
				token: '2',
				logprob: -3.128163257315464e-7,
				prob: 0.9999996871837232,
				gini: 0.9999995502962651,
				opacity: {
					prob: 0.9999996871837232,
					gini: 0.9999995502962651
				},
				top: [
					{
						token: '2',
						logprob: -3.128163257315464e-7,
						prob: 0.9999996871837232
					},
					{
						token: ' ',
						logprob: -15.375,
						prob: 2.1024338523818466e-7
					},
					{
						token: '202',
						logprob: -18.25,
						prob: 1.186112015134383e-8
					},
					{
						token: '22',
						logprob: -20.375,
						prob: 1.4166087866431964e-9
					},
					{
						token: '۲',
						logprob: -20.4375,
						prob: 1.3307807990689665e-9
					}
				]
			},
			{
				token: '.',
				logprob: -0.000002696889623621246,
				prob: 0.999997303114013,
				gini: 0.9999947461711275,
				opacity: {
					prob: 0.999997303114013,
					gini: 0.9999947461711275
				},
				top: [
					{
						token: '.',
						logprob: -0.000002696889623621246,
						prob: 0.999997303114013
					},
					{
						token: '.x',
						logprob: -12.87500286102295,
						prob: 0.0000025612814430465682
					},
					{
						token: ',',
						logprob: -17.250001907348633,
						prob: 3.224180587614433e-8
					},
					{
						token: '.X',
						logprob: -17.375001907348633,
						prob: 2.845329381943118e-8
					},
					{
						token: '.xx',
						logprob: -19.125001907348633,
						prob: 4.9444410711567335e-9
					}
				]
			},
			{
				token: '15',
				logprob: -4.320199877838604e-7,
				prob: 0.9999995679801056,
				gini: 0.9999993148970289,
				opacity: {
					prob: 0.9999995679801056,
					gini: 0.9999993148970289
				},
				top: [
					{
						token: '15',
						logprob: -4.320199877838604e-7,
						prob: 0.9999995679801056
					},
					{
						token: '5',
						logprob: -15.375,
						prob: 2.1024338523818466e-7
					},
					{
						token: '14',
						logprob: -16.25,
						prob: 8.764248219443636e-8
					},
					{
						token: '11',
						logprob: -17.5,
						prob: 2.510999155743982e-8
					},
					{
						token: '16',
						logprob: -17.75,
						prob: 1.9555681087850496e-8
					}
				]
			},
			{
				token: '.',
				logprob: -0.0015649731503799558,
				prob: 0.998436250781544,
				gini: 0.9969379656637417,
				opacity: {
					prob: 0.998436250781544,
					gini: 0.9969379656637417
				},
				top: [
					{
						token: '.',
						logprob: -0.0015649731503799558,
						prob: 0.998436250781544
					},
					{
						token: '.x',
						logprob: -6.626564979553223,
						prob: 0.0013247056706830282
					},
					{
						token: ' or',
						logprob: -8.751564979553223,
						prob: 0.00015821353032942963
					},
					{
						token: ',',
						logprob: -10.126564979553223,
						prob: 0.00004000264505933499
					},
					{
						token: '.X',
						logprob: -11.501564979553223,
						prob: 0.000010114252607922998
					}
				]
			},
			{
				token: '11',
				logprob: -0.6327440738677979,
				prob: 0.5311323331231999,
				gini: 0.501806031217517,
				opacity: {
					prob: 0.5311323331231999,
					gini: 0.501806031217517
				},
				top: [
					{
						token: '11',
						logprob: -0.6327440738677979,
						prob: 0.5311323331231999
					},
					{
						token: '1',
						logprob: -0.7577440738677979,
						prob: 0.4687226388437534
					},
					{
						token: '0',
						logprob: -9.132743835449219,
						prob: 0.0001080686553149678
					},
					{
						token: '10',
						logprob: -10.507743835449219,
						prob: 0.000027324035128998924
					},
					{
						token: '2',
						logprob: -12.007743835449219,
						prob: 0.0000060968163342348526
					}
				]
			},
			{
				token: ' or',
				logprob: -0.37446358799934387,
				prob: 0.6876580479052847,
				gini: 0.5613943359214176,
				opacity: {
					prob: 0.6876580479052847,
					gini: 0.5613943359214176
				},
				top: [
					{
						token: ' or',
						logprob: -0.37446358799934387,
						prob: 0.6876580479052847
					},
					{
						token: ',',
						logprob: -1.2494635581970215,
						prob: 0.2866585312410673
					},
					{
						token: ' and',
						logprob: -4.6244635581970215,
						prob: 0.009808915537055256
					},
					{
						token: "'s",
						logprob: -4.7494635581970215,
						prob: 0.008656337579165176
					},
					{
						token: ' updates',
						logprob: -6.3744635581970215,
						prob: 0.0017045339338464327
					}
				]
			},
			{
				token: ' any',
				logprob: -0.3993816673755646,
				prob: 0.670734654958818,
				gini: 0.5535444295685507,
				opacity: {
					prob: 0.670734654958818,
					gini: 0.5535444295685507
				},
				top: [
					{
						token: ' any',
						logprob: -0.3993816673755646,
						prob: 0.670734654958818
					},
					{
						token: ' other',
						logprob: -1.5243816375732422,
						prob: 0.21775566716475614
					},
					{
						token: ' its',
						logprob: -3.274381637573242,
						prob: 0.03784026099190228
					},
					{
						token: ' another',
						logprob: -4.399381637573242,
						prob: 0.01228493409650499
					},
					{
						token: ' need',
						logprob: -4.524381637573242,
						prob: 0.01084141628862154
					}
				]
			},
			{
				token: ' other',
				logprob: -0.14377272129058838,
				prob: 0.8660845682747543,
				gini: 0.7908197917916023,
				opacity: {
					prob: 0.8660845682747543,
					gini: 0.7908197917916023
				},
				top: [
					{
						token: ' other',
						logprob: -0.14377272129058838,
						prob: 0.8660845682747543
					},
					{
						token: ' particular',
						logprob: -2.393772602081299,
						prob: 0.09128465278313411
					},
					{
						token: ' specific',
						logprob: -4.518772602081299,
						prob: 0.010902397039086575
					},
					{
						token: ' subsequent',
						logprob: -5.018772602081299,
						prob: 0.006612638068566242
					},
					{
						token: ' additional',
						logprob: -5.393772602081299,
						prob: 0.0045447952490506194
					}
				]
			},
			{
				token: ' version',
				logprob: -0.31971475481987,
				prob: 0.7263561971308715,
				gini: 0.6315121393269996,
				opacity: {
					prob: 0.7263561971308715,
					gini: 0.6315121393269996
				},
				top: [
					{
						token: ' version',
						logprob: -0.31971475481987,
						prob: 0.7263561971308715
					},
					{
						token: ' release',
						logprob: -2.8197147846221924,
						prob: 0.059622945665045675
					},
					{
						token: ' updates',
						logprob: -2.8197147846221924,
						prob: 0.059622945665045675
					},
					{
						token: ' versions',
						logprob: -2.9447147846221924,
						prob: 0.05261706487237244
					},
					{
						token: ' particular',
						logprob: -3.6947147846221924,
						prob: 0.02485454154911291
					}
				]
			},
			{
				token: ',',
				logprob: -0.008789588697254658,
				prob: 0.9912489268097171,
				gini: 0.9846074317958029,
				opacity: {
					prob: 0.9912489268097171,
					gini: 0.9846074317958029
				},
				top: [
					{
						token: ',',
						logprob: -0.008789588697254658,
						prob: 0.9912489268097171
					},
					{
						token: "'s",
						logprob: -5.758789539337158,
						prob: 0.0031549282045383407
					},
					{
						token: ' updates',
						logprob: -5.758789539337158,
						prob: 0.0031549282045383407
					},
					{
						token: ' changes',
						logprob: -7.133789539337158,
						prob: 0.0007976907720284686
					},
					{
						token: '-related',
						logprob: -7.383789539337158,
						prob: 0.0006212421979046049
					}
				]
			},
			{
				token: ' please',
				logprob: -0.5685397982597351,
				prob: 0.5663518231264454,
				gini: 0.3939475692913692,
				opacity: {
					prob: 0.5663518231264454,
					gini: 0.3939475692913692
				},
				top: [
					{
						token: ' please',
						logprob: -0.5685397982597351,
						prob: 0.5663518231264454
					},
					{
						token: ' I',
						logprob: -1.6935398578643799,
						prob: 0.1838675058115425
					},
					{
						token: ' feel',
						logprob: -2.19353985786438,
						prob: 0.11152127959959132
					},
					{
						token: ' let',
						logprob: -2.56853985786438,
						prob: 0.07664737982584947
					},
					{
						token: ' you',
						logprob: -3.31853985786438,
						prob: 0.036205658584967715
					}
				]
			},
			{
				token: ' refer',
				logprob: -0.7958189845085144,
				prob: 0.4512115482913303,
				gini: 0.4194609636572119,
				opacity: {
					prob: 0.4512115482913303,
					gini: 0.4194609636572119
				},
				top: [
					{
						token: ' let',
						logprob: -0.7958189845085144,
						prob: 0.4512115482913303
					},
					{
						token: ' refer',
						logprob: -0.7958189845085144,
						prob: 0.4512115482913303
					},
					{
						token: ' check',
						logprob: -3.170819044113159,
						prob: 0.04196920918871083
					},
					{
						token: ' consult',
						logprob: -3.545819044113159,
						prob: 0.028844987514736513
					},
					{
						token: ' feel',
						logprob: -4.17081880569458,
						prob: 0.015439612903840435
					}
				]
			},
			{
				token: ' to',
				logprob: -0.02326376549899578,
				prob: 0.9770047496387754,
				gini: 0.955080503217174,
				opacity: {
					prob: 0.9770047496387754,
					gini: 0.955080503217174
				},
				top: [
					{
						token: ' to',
						logprob: -0.02326376549899578,
						prob: 0.9770047496387754
					},
					{
						token: ' directly',
						logprob: -3.773263692855835,
						prob: 0.022976951071236817
					},
					{
						token: ' back',
						logprob: -11.898263931274414,
						prob: 0.000006802203655641954
					},
					{
						token: ' specifically',
						logprob: -12.898263931274414,
						prob: 0.000002502390879571904
					},
					{
						token: ' there',
						logprob: -13.398263931274414,
						prob: 0.0000015177767910456238
					}
				]
			},
			{
				token: ' the',
				logprob: -0.058754757046699524,
				prob: 0.9429379897007097,
				gini: 0.8925938573806064,
				opacity: {
					prob: 0.9429379897007097,
					gini: 0.8925938573806064
				},
				top: [
					{
						token: ' the',
						logprob: -0.058754757046699524,
						prob: 0.9429379897007097
					},
					{
						token: ' their',
						logprob: -3.4337546825408936,
						prob: 0.03226556609611533
					},
					{
						token: ' those',
						logprob: -4.183754920959473,
						prob: 0.01524117059528069
					},
					{
						token: ' Tensor',
						logprob: -5.308754920959473,
						prob: 0.004948083639187403
					},
					{
						token: ' its',
						logprob: -5.683754920959473,
						prob: 0.00340076483577452
					}
				]
			},
			{
				token: ' official',
				logprob: -0.3528226912021637,
				prob: 0.702701777539394,
				gini: 0.5309201133304084,
				opacity: {
					prob: 0.702701777539394,
					gini: 0.5309201133304084
				},
				top: [
					{
						token: ' official',
						logprob: -0.3528226912021637,
						prob: 0.702701777539394
					},
					{
						token: ' release',
						logprob: -2.102822780609131,
						prob: 0.1221112480350611
					},
					{
						token: ' Tensor',
						logprob: -2.227822780609131,
						prob: 0.10776279816168069
					},
					{
						token: ' [',
						logprob: -2.852822780609131,
						prob: 0.057681269285224816
					},
					{
						token: ' relevant',
						logprob: -5.852822780609131,
						prob: 0.002871781297448659
					}
				]
			},
			{
				token: ' Tensor',
				logprob: -0.5898627042770386,
				prob: 0.5544033967246277,
				gini: 0.45825476809856824,
				opacity: {
					prob: 0.5544033967246277,
					gini: 0.45825476809856824
				},
				top: [
					{
						token: ' Tensor',
						logprob: -0.5898627042770386,
						prob: 0.5544033967246277
					},
					{
						token: ' release',
						logprob: -0.9648627042770386,
						prob: 0.3810355106941346
					},
					{
						token: ' [',
						logprob: -3.089862823486328,
						prob: 0.04550819663222577
					},
					{
						token: ' documentation',
						logprob: -4.464862823486328,
						prob: 0.011506274042294888
					},
					{
						token: ' chang',
						logprob: -5.589862823486328,
						prob: 0.003735540257932368
					}
				]
			},
			{
				token: 'Flow',
				logprob: -0.00000436574100604048,
				prob: 0.9999956342685238,
				gini: 0.9999913950125201,
				opacity: {
					prob: 0.5544033967246277,
					gini: 0.45825476809856824
				},
				top: [
					{
						token: 'Flow',
						logprob: -0.00000436574100604048,
						prob: 0.9999956342685238
					},
					{
						token: 'flow',
						logprob: -12.375004768371582,
						prob: 0.000004222831140981511
					},
					{
						token: 'Board',
						logprob: -16.750003814697266,
						prob: 5.315764976351624e-8
					},
					{
						token: ' Flow',
						logprob: -17.625003814697266,
						prob: 2.2159405241782167e-8
					},
					{
						token: 'Flows',
						logprob: -19.250003814697266,
						prob: 4.363445607687925e-9
					}
				]
			},
			{
				token: ' release',
				logprob: -0.1902422159910202,
				prob: 0.8267588554735043,
				gini: 0.714415021174238,
				opacity: {
					prob: 0.8267588554735043,
					gini: 0.714415021174238
				},
				top: [
					{
						token: ' release',
						logprob: -0.1902422159910202,
						prob: 0.8267588554735043
					},
					{
						token: ' documentation',
						logprob: -2.440242290496826,
						prob: 0.08713973577414533
					},
					{
						token: ' Git',
						logprob: -2.940242290496826,
						prob: 0.05285292142627693
					},
					{
						token: ' chang',
						logprob: -4.190242290496826,
						prob: 0.01514261551670306
					},
					{
						token: ' [',
						logprob: -5.565242290496826,
						prob: 0.003828652786669884
					}
				]
			},
			{
				token: ' notes',
				logprob: -0.01329399086534977,
				prob: 0.9867939839542312,
				gini: 0.9755366932036001,
				opacity: {
					prob: 0.9867939839542312,
					gini: 0.9755366932036001
				},
				top: [
					{
						token: ' notes',
						logprob: -0.01329399086534977,
						prob: 0.9867939839542312
					},
					{
						token: ' documentation',
						logprob: -4.513294219970703,
						prob: 0.010962288440186634
					},
					{
						token: ' logs',
						logprob: -7.513294219970703,
						prob: 0.0005457802040398166
					},
					{
						token: ' page',
						logprob: -7.763294219970703,
						prob: 0.0004250540502910803
					},
					{
						token: ' chang',
						logprob: -7.763294219970703,
						prob: 0.0004250540502910803
					}
				]
			},
			{
				token: ' or',
				logprob: -1.5037477016448975,
				prob: 0.2222954998859533,
				gini: 0.3882637940365817,
				opacity: {
					prob: 0.2222954998859533,
					gini: 0.3882637940365817
				},
				top: [
					{
						token: '.',
						logprob: -0.6287476420402527,
						prob: 0.5332592144212043
					},
					{
						token: ' or',
						logprob: -1.5037477016448975,
						prob: 0.2222954998859533
					},
					{
						token: ' on',
						logprob: -1.6287477016448975,
						prob: 0.19617509010784806
					},
					{
						token: ' available',
						logprob: -4.003747463226318,
						prob: 0.018247130152691696
					},
					{
						token: ' directly',
						logprob: -4.628747463226318,
						prob: 0.009766984951901697
					}
				]
			},
			{
				token: ' Git',
				logprob: -1.358621597290039,
				prob: 0.25701480280309064,
				gini: 0.22335325512370435,
				opacity: {
					prob: 0.25701480280309064,
					gini: 0.22335325512370435
				},
				top: [
					{
						token: ' Git',
						logprob: -1.358621597290039,
						prob: 0.25701480280309064
					},
					{
						token: ' documentation',
						logprob: -1.608621597290039,
						prob: 0.20016332968398967
					},
					{
						token: ' the',
						logprob: -1.733621597290039,
						prob: 0.1766435184571401
					},
					{
						token: ' their',
						logprob: -1.983621597290039,
						prob: 0.13757011049890885
					},
					{
						token: ' chang',
						logprob: -2.483621597290039,
						prob: 0.08344048987764308
					}
				]
			},
			{
				token: 'Hub',
				logprob: -0.0000012664456789934775,
				prob: 0.9999987335551229,
				gini: 0.9999980203384276,
				opacity: {
					prob: 0.25701480280309064,
					gini: 0.22335325512370435
				},
				top: [
					{
						token: 'Hub',
						logprob: -0.0000012664456789934775,
						prob: 0.9999987335551229
					},
					{
						token: ' repository',
						logprob: -14.125000953674316,
						prob: 7.33820819192633e-7
					},
					{
						token: ' commit',
						logprob: -15.875000953674316,
						prob: 1.275189375371399e-7
					},
					{
						token: ' Hub',
						logprob: -16.500001907348633,
						prob: 6.825590357542018e-8
					},
					{
						token: ' commits',
						logprob: -16.625001907348633,
						prob: 6.023562348842112e-8
					}
				]
			},
			{
				token: ' issues',
				logprob: -0.3655456602573395,
				prob: 0.693817958682853,
				gini: 0.5546366400039882,
				opacity: {
					prob: 0.693817958682853,
					gini: 0.5546366400039882
				},
				top: [
					{
						token: ' issues',
						logprob: -0.3655456602573395,
						prob: 0.693817958682853
					},
					{
						token: ' repository',
						logprob: -2.1155457496643066,
						prob: 0.12056747193748489
					},
					{
						token: ' page',
						logprob: -2.3655457496643066,
						prob: 0.09389804155785286
					},
					{
						token: ' issue',
						logprob: -3.4905457496643066,
						prob: 0.030484230871873793
					},
					{
						token: ' chang',
						logprob: -4.115545749664307,
						prob: 0.01631703296378187
					}
				]
			},
			{
				token: '.',
				logprob: -1.4283154010772705,
				prob: 0.23971240155135076,
				gini: 0.5035388117149031,
				opacity: {
					prob: 0.23971240155135076,
					gini: 0.5035388117149031
				},
				top: [
					{
						token: ' page',
						logprob: -0.4283154308795929,
						prob: 0.6516058457739469
					},
					{
						token: '.',
						logprob: -1.4283154010772705,
						prob: 0.23971240155135076
					},
					{
						token: ' for',
						logprob: -2.8033154010772705,
						prob: 0.060608786717628614
					},
					{
						token: ' section',
						logprob: -3.6783154010772705,
						prob: 0.025265501241374617
					},
					{
						token: ' related',
						logprob: -5.17831563949585,
						prob: 0.005637493994134803
					}
				]
			}
		]
	}
];
