# --
# OTOBO is a web-based ticketing system for service organisations.
# --
# Copyright (C) 2001-2020 OTRS AG, https://otrs.com/
# Copyright (C) 2019-2026 Rother OSS GmbH, https://otobo.io/
# --
# This program is free software: you can redistribute it and/or modify it under
# the terms of the GNU General Public License as published by the Free Software
# Foundation, either version 3 of the License, or (at your option) any later version.
# This program is distributed in the hope that it will be useful, but WITHOUT
# ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
# FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <https://www.gnu.org/licenses/>.
# --

package Kernel::Language::hu_AgentTicketArticlePin;

use strict;
use warnings;
use utf8;

sub Data {
    my $Self = shift;

    # Template: AgentTicketZoom
    $Self->{Translation}->{'Pinned'} = 'Kitűzve';

    # Perl Module: Kernel/Output/HTML/ArticleAction/ArticlePin.pm
    $Self->{Translation}->{'Pin'} = 'Kitűzés';
    $Self->{Translation}->{'Unpin'} = 'Kitűzés megszüntetése';

    # SysConfig
    $Self->{Translation}->{'Defines if a ticket lock is required to pin a ticket in the ticket zoom screen of the agent interface.'} =
        'Meghatározza, hogy jegyzárolás szükséges egy jegy kitűzéséhez az ügyintézői felület jegynagyítás képernyőjén.';
    $Self->{Translation}->{'Defines the permission required to pin/unpin articles in the agent interface.'} =
        'Meghatározza a bejegyzések kitűzéséhez vagy a kitűzés megszüntetéséhez szükséges jogosultságot az ügyintézői felületen.';


    push @{ $Self->{JavaScriptStrings} // [] }, (
    'Ascending sort applied, ',
    'Descending sort applied, ',
    'No sort applied, ',
    'activate to apply a descending sort',
    'activate to apply an ascending sort',
    'activate to remove the sort',
    'sorting is disabled',
    );

}

1;
