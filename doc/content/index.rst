.. toctree::
    :maxdepth: 2
    :caption: Contents

Sacrifice to Sphinx
===================

Description
===========
Pin articles to show them at the top of the list in the zoom view of the agent interface.

System requirements
===================

Framework
---------
OTOBO 11.1.x

Packages
--------
\-

Third-party software
--------------------
\-

Usage
=====
To pin an article, navigate to the zoom view of the agent interface and use the "Pin" action available in the Article Actions menu. Pinned articles will be displayed at the top of the article list.
A pinned article can be unpinned by selecting the "Unpin" action from the same menu.

The "Permission" and "RequiredLock" options in the configuration can be used to control which agents are allowed to pin articles and whether a ticket lock is required to pin articles.

.. note::

   Articles are pinned for all agents, not just for the agent who pinned them. This means that if an article is pinned, it will remain at the top of the list for all agents viewing the Ticket.


Configuration Reference
-----------------------

Frontend::Agent::ModuleRegistration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Frontend::Module###AgentTicketArticlePin
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Frontend module registration for the agent interface.

Frontend::Agent::ModuleRegistration::Loader
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Loader::Module::AgentTicketZoom###010-ArticlePin
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Loader module registration for the agent interface.

Frontend::Agent::View::AgentTicketArticlePin
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Ticket::Frontend::AgentTicketArticlePin###Permission
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Defines the permission required to pin/unpin articles in the agent interface.

Ticket::Frontend::AgentTicketArticlePin###RequiredLock
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Defines if a ticket lock is required to pin a ticket in the ticket zoom screen of the agent interface.

Frontend::Agent::View::TicketZoom::ArticleAction
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Ticket::Frontend::Article::Actions::Email###001-AgentTicketArticlePin
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Defines available article actions for e-mail articles.

Ticket::Frontend::Article::Actions::Internal###001-AgentTicketArticlePin
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Defines available article actions for internal articles.

Ticket::Frontend::Article::Actions::Phone###001-AgentTicketArticlePin
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Defines available article actions for phone articles.

About
=======

Contact
-------
| Rother OSS GmbH
| Email: hello@otobo.io
| Web: https://otobo.io

Version
-------
Author: |doc-vendor| / Version: |doc-version| / Date of release: |doc-datestamp|
