import Persistence from './Persistence';


const SETTINGS_KEY = 'iccsettings';

export default class Properties {
    constructor () {
        this.persistence = new Persistence();
        const persistedProps = this.persistence.getItem(SETTINGS_KEY);

        this.defaultSettings = {
            refreshNeighborsTime: 10,
            refreshNodeInfoTime: 60,
            runIotaRefresh: true,
            iotaDownloadLink:'http://85.93.93.110/iri-1.1.2.3.jar',
            iccrDefaultPortNumber: 14266,
            iccrDefaultApiKey: 'secret',
            servers: []
        };

        this.settings = persistedProps || this.defaultSettings;
    }

    getProperty (key) {
        return this.settings[key];
    }

    // setProperty("refreshhh", "newval");
    setProperty(key, val) {
        this.settings[key] = val;
        this.persistence.setItem(SETTINGS_KEY, this.settings);
    }

    get servers() {
        return this.settings.servers;
    }

    set servers(val) {
        this.settings.servers = val;
    }

}






// copied from iccj properties file. These are the properties UI needs to support.
/*
refreshNeighborsTime=10
refreshNodeInfoTime=60
runIotaRefresh=true
iotaDownloadLink=http://85.93.93.110/iri-1.1.2.3.jar
iccrDefaultPortNumber=14266
iccrDefaultApiKey=secret
# Specification of ICCR servers
# First: a comma separated list of server keys, which are ID values
# Each server ID is known as a key.
# Each key is a unique identifier of that server
# The key is used to specify a block of config properties for that server
# Second: one block of configuration properties for each server
# Each server has 5 properties: name, ip, iccrPortNumber, iccrApiKey, walletCommand
# Note: walletCommand is only used if the server is "local"
# A server is local if it's ip value is either "localhost" or "127.0.0.1"
# Each server configuration property block specifies those 5 properties using a mechanism that embeds the server ID key in the property name
# The pattern is:
    # server.<propertyname>.<serverkey>=<propertyvalue>
    # Example:
    # serverKeys=local
    # server.name.local=Local
    # server.ip.local=localhost
    # server.iccrPortNumber.local=14266
    # server.iccrApiKey.local=secret
    # server.walletCommand.local=
    ##
    serverKeys=localhost
    server.name.localhost = localhost
    server.ip.localhost = localhost
    server.iccrPortNumber.localhost = 14266
    server.iccrApiKey.localhost = secret

*/
