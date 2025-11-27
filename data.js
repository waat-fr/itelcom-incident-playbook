window.STATION_FAULTS_DATA = {
  "manufacturers": [
    {
      "id": "alfen",
      "name": "Alfen",
      "errors": [
        {
          "id": "erreurs/alfen/erreur1.html",
          "label": "Erreur 001 - InternalError",
          "title": "Erreur Alfen 001",
          "description": [
            "Erreur interne : Cause possible -> Erreur générale inconnue."
          ],
          "process": [
            "Transmettre N1"
          ]
        },
        {
          "id": "erreurs/alfen/erreur2.html",
          "label": "Erreur 101",
          "title": "Erreur Alfen 101",
          "description": [
            "Cause possible -> Courant de fuite CC (>6mA) détecté par la borne de recharge."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur3.html",
          "label": "Erreur 102 - PowerMeterFailure",
          "title": "Erreur Alfen 102",
          "description": [
            "Panne du compteur d’énergie : Cause possible -> Erreur interne. Tension inattendue ou nulle sur la sortie de la carte d’alimentation."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur4.html",
          "label": "Erreur 104 - InternalError",
          "title": "Erreur Alfen 104",
          "description": [
            "Erreur interne : Cause possible ->Erreur interne. Tension trop faible sur l’alimentation interne (carte d’alimentation)."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur5.html",
          "label": "Erreur 105 - InternalError",
          "title": "Erreur Alfen 105",
          "description": [
            "Erreur interne : Cause possible -> Pas de communication avec le wattmètre interne."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur6.html",
          "label": "Erreur 106 - InternalError",
          "title": "Erreur Alfen 106",
          "description": [
            "Erreur interne : Cause possible -> Alimentation interrompue par le disjoncteur différentiel interne."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur7.html",
          "label": "Erreur 108",
          "title": "Erreur Alfen 107",
          "description": [
            "Cause possible : Tension d’alimentation supérieure à 275 VAC : Cause possible -> Borne de recharge configurée en mode d’autorisation Plug and Charge et Id Plug and charge non configurée."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur8.html",
          "label": "Erreur 109",
          "title": "Erreur Alfen 109",
          "description": [
            "Cause possible : Pas de connexion/ connexion au compteur d’énergie/ système de gestion d’énergie Modbus TCP/IP perdue : Cause possible -> Pas de connexion/ connexion avec le lecteur RFID perdue."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur9.html",
          "label": "Erreur 201 - GroundFailure",
          "title": "Erreur Alfen 201",
          "description": [
            "Défaut de terre : Courant de fuite détecté ou mise à la terre défectueuse : Cause possible◊Protection de mise à la terre non reliée ou instable."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur10.html",
          "label": "Erreur 202 - UnderVoltage",
          "title": "Erreur 202",
          "description": [
            "Sous-tension détectée : Cause possible -> Tension d’alimentation inférieure à 210 VAC."
          ],
          "process": [
            "..."
          ]
        },
        {
          "id": "erreurs/alfen/erreur11.html",
          "label": "Erreur 206",
          "title": "Erreur Alfen 206",
          "description": [
            "Cause possible : La borne de recharge est mise hors service par le CPO/ La borne de recharge est en cours de mise à jour."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur12.html",
          "label": "Erreur 208",
          "title": "Erreur Alfen 208",
          "description": [
            "Cause possible : Tension d’alimentation supérieure à 275 VAC."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur13.html",
          "label": "Erreur 209",
          "title": "Erreur Alfen 209",
          "description": [
            "Cause possible : Pas de connexion/ connexion au compteur d’énergie smart DSMR4.x/SMR5.0 (P1) perdue."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur14.html",
          "label": "Erreur 210",
          "title": "Erreur Alfen 210",
          "description": [
            "Cause possible : Pas de connexion/ connexion au compteur d’énergie/ système de gestion d’énergie Modbus TCP/IP perdue."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur15.html",
          "label": "Erreur 211 - ConnectorLockFailure",
          "title": "Erreur Alfen 211",
          "description": [
            "Échec du verrouillage du connecteur : Cause possible -> Impossible de déplacer le moteur de verrouillage pendant l’autotest."
          ],
          "process": [
            "S'assurer que le câble soit compatible et bien enclenché.",
            "Demander si l'on entend un bruit au niveau du moteur de verrouillage, si oui: maintenance nécessaire.",
            "Tenter de déverrouiller le câble à distance.",
            "Si toujours inefficace, faire un redémarrage de la borne.",
            "Si le problème persiste: Transmettre N2."
          ]
        },
        {
          "id": "erreurs/alfen/erreur16.html",
          "label": "Erreur 212 - GroundFailure",
          "title": "Erreur Alfen 212",
          "description": [
            "Défaut de terre : Courant de fuite détecté ou mise à la terre défectueuse : Cause possible -> Phase manquante dans l’installation."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur17.html",
          "label": "Erreur 213",
          "title": "Erreur Alfen 213",
          "description": [
            "Cause possible : Pas de connexion/ connexion au compteur électrique smart TIC perdue."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur18.html",
          "label": "Erreur 301",
          "title": "Erreur Alfen 301",
          "description": [
            "Cause possible : Erreur de communication inconnue avec la voiture."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur19.html",
          "label": "Erreur 302 - EVCommunicationError",
          "title": "Erreur Alfen 302",
          "description": [
            "Erreur de communication avec le véhicule : Cause possible -> Mesure de sécurité ; le véhicule consomme plus d’énergie qu’autorisé/ le véhicule n’a pas réduit l’énergie à temps selon la norme IEC 61851."
          ],
          "process": [
            "Vérifier que le câble soit correctement connecté.",
            "Essayer avec un autre véhicule/ câble.",
            "Si inefficace, faire un redémarrage de la borne.",
            "Si le problème persiste: Transmettre N2."
          ]
        },
        {
          "id": "erreurs/alfen/erreur20.html",
          "label": "Erreur 303 - InternalError",
          "title": "Erreur Alfen 303",
          "description": [
            "Erreur interne : Cause possible -> Mesure de sécurité, le véhicule a trop souvent démarré et arrêté la recharge en l’espace d’une minute."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur21.html",
          "label": "Erreur 304 - EVCommunicationError",
          "title": "Erreur Alfen 304",
          "description": [
            "Erreur de communication avec le véhicule : Cause possible -> Câble connecté pendant plus de 2 minutes sans démarrage d’une session de recharge."
          ],
          "process": [
            "Vérifier que le câble soit correctement connecté.",
            "Essayer avec un autre véhicule/ câble.",
            "Si inefficace, faire un redémarrage de la borne.",
            "Si le problème persiste: Transmettre N2."
          ]
        },
        {
          "id": "erreurs/alfen/erreur22.html",
          "label": "Erreur 401 - HighTemperature",
          "title": "Erreur Alfen 401",
          "description": [
            "Surchauffe : Température interne ou du câble trop élevée : Cause possible◊Température intérieure de la borne de recharge supérieure à 70°C."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur23.html",
          "label": "Erreur 402",
          "title": "Erreur Alfen 402",
          "description": [
            "Cause possible : Température intérieure de la borne de recharge inférieure à -40°C."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur24.html",
          "label": "Erreur 404 - ConnectorLockFailure (câble bloqué)",
          "title": "Erreur Alfen 404",
          "description": [
            "Échec du verrouillage du connecteur : Cause possible -> Impossible de verrouiller le câble de recharge."
          ],
          "process": [
            "S'assurer que le câble soit compatible et bien enclenché.",
            "Tenter de déverrouiller le câble à distance.",
            "Si inefficace, faire un redémarrage de la borne.",
            "Si le problème persiste: Transmettre N2."
          ]
        },
        {
          "id": "erreurs/alfen/erreur25.html",
          "label": "Erreur 405 - OtherError",
          "title": "Erreur Alfen 405",
          "description": [
            "Cause possible : La résistance de la mesure PP du câble est hors plage suivant la norme IEC 61851."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur26.html",
          "label": "Erreur 406 - ConnectorLockFailure (problème de de câble)",
          "title": "Erreur Alfen 406",
          "description": [
            "Échec du verrouillage du connecteur : Cause possible -> Le niveau de tension PC surveillé est hors plage suivant la norme IEC 61851."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/alfen/erreur27.html",
          "label": "Erreur 407",
          "title": "Erreur Alfen 407",
          "description": [
            "Cause possible : X"
          ],
          "process": [
            "Transmettre N2"
          ]
        }
      ]
    },
    {
      "id": "schneider",
      "name": "Schneider",
      "errors": [
        {
          "id": "erreurs/schneider/erreur1.html",
          "label": "Erreur 1.0 - InternalError",
          "title": "Erreur Schneider 1.0",
          "description": [
            "Erreur interne : Description de l’erreur (configuration logicielle) -> Configuration incorrecte du micro-commutateur."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur2.html",
          "label": "Erreur 1.1 - InternalError",
          "title": "Erreur Schneider 1.1",
          "description": [
            "Erreur interne : Description de l’erreur (configuration logicielle) -> La borne de recharge détecte que la version du micrologiciel est inférieure à celle attendue."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur3.html",
          "label": "Erreur 1.2 - InternalError",
          "title": "Erreur Schneider 1.2",
          "description": [
            "Erreur interne : Description de l’erreur (configuration logicielle) -> La borne de recharge détecte que la version du logiciel est inférieure à celle attendue."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur4.html",
          "label": "Erreur 2.0 - InternalError",
          "title": "Erreur Schneider 2.0",
          "description": [
            "Erreur interne : Description de l’erreur (Configuration matérielle) -> Problème avec le matériel EVSE."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur5.html",
          "label": "Erreur 2.1 - InternalError",
          "title": "Erreur Schneider 2.1",
          "description": [
            "Erreur interne : Description de l’erreur (Configuration matérielle) -> Configuration de déclassement physique non valide OU modification de la configuration de déclassement physique pendant la charge. Configurez le micro-commutateur conformément à la notice d’installation."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur6.html",
          "label": "Erreur 2.2 - GroundFailure",
          "title": "Erreur Schneider 2.2",
          "description": [
            "Défaut de terre : Courant de fuite détecté ou mise à la terre défectueuse : Description de l’erreur (Configuration matérielle) -> fiche 6mA manquante."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur7.html",
          "label": "Erreur 2.3 - WeakSignal (Défaut de connexion à l'OCPP)",
          "title": "Erreur Schneider 2.3",
          "description": [
            "Signal réseau faible : Description de l’erreur (Configuration matérielle) -> Fiche 15118 manquante."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur8.html",
          "label": "Erreur 2.4",
          "title": "Erreur Schneider 2.4",
          "description": [
            "Description de l’erreur (Configuration matérielle) -> Capot avant ouvert."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur9.html",
          "label": "Erreur 2.5 - HighTemperature",
          "title": "Erreur Schneider 2.5",
          "description": [
            "Surchauffe : Température interne ou du câble trop élevée : Description de l’erreur (Configuration matérielle) -> Problème avec le capteur de température. Uniquement pour les références commerciales Eichrecht."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur10.html",
          "label": "Erreur 3.0 - OverVoltage",
          "title": "Erreur Schneider 3.0",
          "description": [
            "Surtension détectée : Description de l’erreur (Dispositif de protection en amont) -> Incohérence déclenchement MNX/contacteur."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur11.html",
          "label": "Erreur 4.0 - GroundFailure",
          "title": "Erreur Schneider 4.0",
          "description": [
            "Défaut de terre : Courant de fuite détecté ou mise à la terre défectueuse : Description de l’erreur (RDC_DD) -> Le dispositif RDC DD interne signale une erreur interne."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur12.html",
          "label": "Erreur 5.0 - GroundFailure",
          "title": "Erreur Schneider 5.0",
          "description": [
            "Défaut de terre : Courant de fuite détecté ou mise à la terre défectueuse : Description de l’erreur (6mA_Detection) -> Valeur de courant de fuite CC supérieure à 6mA."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur13.html",
          "label": "Erreur 6.0 - OverVoltage",
          "title": "Erreur Schneider 6.0",
          "description": [
            "Surtension détectée : Description de l’erreur (Mesures) ->Défaut de synchronisation de phase ou erreur de tension ou de fréquence d’entrée."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur14.html",
          "label": "Erreur 6.1 - PowerMeterFailure",
          "title": "Erreur Schneider 6.1",
          "description": [
            "Panne du compteur d’énergie : Description de l’erreur (Mesures) -> Au moins un défaut de mesure a été détecté."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur15.html",
          "label": "Erreur 7.0 - PowerMeterFailure",
          "title": "Erreur Schneider 7.0",
          "description": [
            "Panne du compteur d’énergie : Description de l’erreur (PowerMeter) -> Perte de communication avec la centrale de mesure Modbus pour les mesures (internes ou externes), au cours de 3 tentatives infructueuses consécutives."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur16.html",
          "label": "Erreur 7.1 - InternalError",
          "title": "Erreur Schneider 7.1",
          "description": [
            "Erreur interne : Description de l’erreur (PowerMeter) -> Echec de la vérification de la signature du dataset ou erreur ou erreur Autres du dataset."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur17.html",
          "label": "Erreur 8.0 - WeakSignal (Défaut de connexion à l'OCPP)",
          "title": "Erreur Schneider 8.0",
          "description": [
            "Signal réseau faible : Description de l’erreur (Bluetooth) -> Problème avec le processus Bluetooth : perte de communication ou mise à jour impossible."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur18.html",
          "label": "Erreur 9.0 - WeakSignal (Défaut de connexion à l'OCPP)",
          "title": "Erreur Schneider 9.0",
          "description": [
            "Signal réseau faible : Description de l’erreur (Lecteur de badges) -> Perte de communication avec le lecteur RFID, NFC."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur19.html",
          "label": "Erreur 10.0 - EVCommunicationError",
          "title": "Erreur Schneider 10.0",
          "description": [
            "Erreur de communication avec le véhicule : Description de l’erreur (EV_ISSUES) -> Défaut de communication avec un véhicule Mode 3 / T2 (erreur « CP » : Pilote de contrôle)."
          ],
          "process": [
            "Vérifier que le câble soit correctement connecté.",
            "Essayer avec un autre véhicule/ câble.",
            "Si inefficace, faire un redémarrage de la borne.",
            "Si le problème persiste: Transmettre N2."
          ]
        },
        {
          "id": "erreurs/schneider/erreur20.html",
          "label": "Erreur 10.1 - ConnectorLockFailure",
          "title": "Erreur Schneider 10.1",
          "description": [
            "Échec du verrouillage du connecteur : Description de l’erreur ◊Etat du câble incorrect (la valeur de la résistance de codage « PP » est erronée)."
          ],
          "process": [
            "S'assurer que le câble soit compatible et bien enclenché.",
            "Tenter de déverrouiller le câble à distance.",
            "Si toujours inefficace, faire un redémarrage de la borne.",
            "Si le problème persiste: Transmettre N2."
          ]
        },
        {
          "id": "erreurs/schneider/erreur21.html",
          "label": "Erreur 10.2 - EVCommunicationError",
          "title": "Erreur Schneider 10.2",
          "description": [
            "Erreur de communication avec le véhicule : Description de l’erreur -> Court-circuit de défaut de charge sur fil pilote de contrôle (CPW)."
          ],
          "process": [
            "Vérifier que le câble soit correctement connecté.",
            "Essayer avec un autre véhicule/ câble.",
            "Si inefficace, faire un redémarrage de la borne.",
            "Si le problème persiste: Transmettre N2."
          ]
        },
        {
          "id": "erreurs/schneider/erreur22.html",
          "label": "Erreur 11.0 - ConnectorLockFailure (manipulation)",
          "title": "Erreur Schneider 11.0",
          "description": [
            "Échec du verrouillage du connecteur : Description de l’erreur (Prise) -> Manipulation incorrecte lors du branchement/ débranchement de la prise ou le moteur bloqué."
          ],
          "process": [
            "S'assurer que le câble soit compatible et bien enclenché.",
            "Demander si l'on entend un bruit au niveau du moteur de verrouillage, si oui: maintenance nécessaire.",
            "Tenter de déverrouiller le câble à distance.",
            "Si toujoursinefficace, faire un redémarrage de la borne.",
            "Si le problème persiste: Transmettre N2."
          ]
        },
        {
          "id": "erreurs/schneider/erreur23.html",
          "label": "Erreur 12.0",
          "title": "Erreur Schneider 12.0",
          "description": [
            "Échec du verrouillage du connecteur : Description de l’erreur (Prise) -> Manipulation incorrecte lors du branchement/ débranchement de la prise ou le moteur bloqué."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur24.html",
          "label": "Erreur 13.0 - OverVoltage",
          "title": "Erreur Schneider 13.0",
          "description": [
            "Surtension détectée : Description de l’erreur (Phase_discordance) -> La charge triphasée n’est pas autorisée en mode simplifié 3."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur25.html",
          "label": "Erreur 14.0 - OverCurrentFailure",
          "title": "Erreur Schneider 14.0",
          "description": [
            "Courant excessif : Description de l’erreur (Surintensité) -> Défaut de surintensité ou de surcharge dû à un véhicule électrique."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur26.html",
          "label": "Erreur 15.0 - EVCommunicationError",
          "title": "Erreur Schneider 15.0",
          "description": [
            "Erreur de communication avec le véhicule : Description de l’erreur (VENTILATION_NOT_ ALLOWED) -> Risque de fuite de gaz des batteries. Voiture demandant une ventilation incompatible avec nos produits"
          ],
          "process": [
            "Vérifier que le câble soit correctement connecté.",
            "Essayer avec un autre véhicule/ câble.",
            "Si inefficace, faire un redémarrage de la borne.",
            "Si le problème persiste: Transmettre N2."
          ]
        },
        {
          "id": "erreurs/schneider/erreur27.html",
          "label": "Erreur 16.0 - WeakSignal (Défaut de connexion à l'OCPP)",
          "title": "Erreur Schneider 16.0",
          "description": [
            "Signal réseau faible : Description de l’erreur (EVCE) -> Perte de la communication de supervision entre EV Charging Expert et la borne de recharge."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur28.html",
          "label": "Erreur 17.0 - WeakSignal (Défaut de connexion à l'OCPP)",
          "title": "Erreur Schneider 17.0",
          "description": [
            "Signal réseau faible : Description de l’erreur (OCPP) -> Problème de communication ou de configuration de la supervision (OCPP)."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur29.html",
          "label": "Erreur 17.1",
          "title": "Erreur Schneider 17.1",
          "description": [
            "Description de l’erreur (OCPP) -> La communication entre l'opérateur de point de charge (CPO) et la borne de recharge est perdue mais la borne de recharge n'est pas en erreur. La charge est autorisée en mode hors ligne."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur30.html",
          "label": "Erreur 18.0 - WeakSignal (Défaut de connexion à l'OCPP)",
          "title": "Erreur Schneider 18.0",
          "description": [
            "Signal réseau faible : Description de l’erreur (EM) -> Perte de communication avec l'équipement externe pour la gestion de l'énergie (TIC)."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur31.html",
          "label": "Erreur 18.1 - WeakSignal (Défaut de connexion à l'OCPP)",
          "title": "Erreur Schneider 18.1",
          "description": [
            "Signal réseau faible : Description de l’erreur (EM) -> Perte de communication avec l'équipement externe pour la gestion de l'énergie (compteur Modbus)."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/schneider/erreur32.html",
          "label": "Erreur 19.0 - HighTemperature",
          "title": "Erreur Schneider 19.0",
          "description": [
            "Surchauffe : Température interne ou du câble trop élevée : Description de l’erreur (Température) -> Température trop élevée ou trop basse. Uniquement pour les références commerciales Eichrecht"
          ],
          "process": [
            "Transmettre N2"
          ]
        }
      ]
    },
    {
      "id": "evbox",
      "name": "Evbox",
      "errors": [
        {
          "id": "erreurs/evbox/erreur1.html",
          "label": "LOCK_FAIL - ConnectorLockFailure",
          "title": "Erreur Evbox LOCK_FAIL",
          "description": [
            "Échec du verrouillage du connecteur"
          ],
          "process": [
            "S'assurer que le câble soit compatible et bien enclenché.",
            "Tenter de déverrouiller le câble à distance.",
            "Si toujours inefficace, faire un redémarrage de la borne.",
            "Si le problème persiste: Transmettre N2."
          ]
        },
        {
          "id": "erreurs/evbox/erreur2.html",
          "label": "CP_ERROR - EVCommunicationError",
          "title": "Erreur Evbox CP_ERROR",
          "description": [
            "Erreur de communication avec le véhicule"
          ],
          "process": [
            "Vérifier que le câble soit correctement connecté.",
            "Essayer avec un autre véhicule/ câble.",
            "Si inefficace, faire un redémarrage de la borne.",
            "Si le problème persiste: Transmettre N2."
          ]
        },
        {
          "id": "erreurs/evbox/erreur3.html",
          "label": "RCD_FAULT - GroundFailure",
          "title": "Erreur Evbox RCD_ERROR",
          "description": [
            "Défaut de terre : Courant de fuite détecté ou mise à la terre défectueuse."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/evbox/erreur4.html",
          "label": "TEMP_HIGH - HighTemperature",
          "title": "Erreur Evbox TEMP_HIGH",
          "description": [
            "Surchauffe : Température interne ou du câble trop élevée."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/evbox/erreur5.html",
          "label": "MCB_TRIP - OverCurrentFailure",
          "title": "Erreur Evbox MCB_TRIP",
          "description": [
            "Courant excessif"
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/evbox/erreur6.html",
          "label": "RELAY_ERR - PowerSwitchFailure",
          "title": "Erreur Evbox RELAY_ERR",
          "description": [
            "Défaut de contacteur / relais"
          ],
          "process": [
            "Transmettre N2"
          ]
        }
      ]
    },
    {
      "id": "ABB",
      "name": "ABB",
      "errors": [
        {
          "id": "erreurs/ABB/erreur1.html",
          "label": "ERR101 - PowerSwitchFailure",
          "title": "Erreur ABB ERR101",
          "description": [
            "Défaut de contacteur / relais"
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/ABB/erreur2.html",
          "label": "ERR205 - GroundFailure",
          "title": "Erreur ABB ERR205",
          "description": [
            "Défaut de terre : Courant de fuite détecté ou mise à la terre défectueuse."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/ABB/erreur3.html",
          "label": "ERR330 - EVCommunicationError",
          "title": "Erreur ABB ERR330",
          "description": [
            "Erreur de communication avec le véhicule."
          ],
          "process": [
            "Vérifier que le câble soit correctement connecté.",
            "Essayer avec un autre véhicule/ câble.",
            "Si inefficace, faire un redémarrage de la borne.",
            "Si le problème persiste: Transmettre N2."
          ]
        },
        {
          "id": "erreurs/ABB/erreur4.html",
          "label": "ERR410 - HighTemperature",
          "title": "Erreur ABB ERR410",
          "description": [
            "Surchauffe : Température interne ou du câble trop élevée."
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/ABB/erreur5.html",
          "label": "ERR503 - InternalError",
          "title": "Erreur ABB ERR503",
          "description": [
            "Erreur interne"
          ],
          "process": [
            "Transmettre N2"
          ]
        },
        {
          "id": "erreurs/ABB/erreur6.html",
          "label": "ERR601 - ConnectorLockFailure",
          "title": "Erreur ABB ERR601",
          "description": [
            "Échec du verrouillage du connecteur"
          ],
          "process": [
            "S'assurer que le câble soit compatible et bien enclenché.",
            "Tenter de déverrouiller le câble à distance.",
            "Si toujours inefficace, faire un redémarrage de la borne.",
            "Si le problème persiste: Transmettre N2."
          ]
        }
      ]
    },
    {
      "id": "Alpitronic",
      "name": "Alpitronic",
      "errors": [
        {
          "id": "erreurs/Smappee/erreur1.html",
          "label": "Peu importe l'erreur: Transmettre N2",
          "title": "",
          "description": [],
          "process": []
        }
      ]
    },
    {
      "id": "Smappee",
      "name": "Smappee",
      "errors": [
        {
          "id": "erreurs/Smappee/erreur1.html",
          "label": "Peu importe l'erreur: Transmettre N2",
          "title": "",
          "description": [],
          "process": []
        }
      ]
    },
    {
      "id": "Ies",
      "name": "Ies",
      "errors": [
        {
          "id": "erreurs/Ies/erreur1.html",
          "label": "Peu importe l'erreur: Transmettre N2",
          "title": "",
          "description": [],
          "process": []
        }
      ]
    },
    {
      "id": "Delta",
      "name": "Delta",
      "errors": [
        {
          "id": "erreurs/Delta/erreur1.html",
          "label": "Peu importe l'erreur: Transmettre N2",
          "title": "",
          "description": [],
          "process": []
        }
      ]
    },
    {
      "id": "Circontrol",
      "name": "Circontrol",
      "errors": [
        {
          "id": "erreurs/Circontrol/erreur1.html",
          "label": "Peu importe l'erreur: Transmettre N2",
          "title": "",
          "description": [],
          "process": []
        }
      ]
    },
    {
      "id": "Ingeteam",
      "name": "Ingeteam",
      "errors": [
        {
          "id": "erreurs/Ingeteam/erreur1.html",
          "label": "Peu importe l'erreur: Transmettre N2",
          "title": "",
          "description": [],
          "process": []
        }
      ]
    },
    {
      "id": "Valeo",
      "name": "Valeo",
      "errors": [
        {
          "id": "erreurs/Valeo/erreur1.html",
          "label": "Peu importe l'erreur: Transmettre N2",
          "title": "",
          "description": [],
          "process": []
        }
      ]
    },
    {
      "id": "Autel",
      "name": "Autel",
      "errors": [
        {
          "id": "erreurs/Autel/erreur1.html",
          "label": "Peu importe l'erreur : Transmettre N2",
          "title": "",
          "description": [],
          "process": []
        }
      ]
    },
    {
      "id": "Citycharge",
      "name": "Citycharge",
      "errors": [
        {
          "id": "erreurs/Smappee/erreur1.html",
          "label": "Peu importe l'erreur : Transmettre N2",
          "title": "",
          "description": [],
          "process": []
        }
      ]
    },
    {
      "id": "Eaton",
      "name": "Eaton",
      "errors": [
        {
          "id": "erreurs/Smappee/erreur1.html",
          "label": "Peu importe l'erreur : Transmettre N2",
          "title": "",
          "description": [],
          "process": []
        }
      ]
    }
  ]
};
